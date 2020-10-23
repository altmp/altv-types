function Cleanup() {
    Remove-Item -Path 'docfx.zip' -Force 2>&1 > $null
    Remove-Item -Path 'docfx-plugins-typescriptreference.zip' -Force 2>&1 > $null
    Remove-Item -Path 'package.json' -Force 2>&1 > $null
    Remove-Item -Path 'package-lock.json' -Force 2>&1 > $null
    Remove-Item -Path 'node_modules' -Recurse -Force 2>&1 > $null
}

function FetchAndDownloadRelease($repo, $file) {
    $global:ProgressPreference='SilentlyContinue'
    $tag=(Invoke-WebRequest -UseBasicParsing "https://api.github.com/repos/$repo/releases" | ConvertFrom-Json)[0].tag_name
    Invoke-WebRequest -UseBasicParsing "https://github.com/$repo/releases/download/$tag/$file" -Out $file
    $global:ProgressPreference='Continue'
    Get-Item -Path $file
}

function ExtractArchive($file, $dest="$($file.DirectoryName)\$($file.BaseName)") {
    $global:ProgressPreference='SilentlyContinue'
    Expand-Archive -Path $file -DestinationPath $dest -Force
    $global:ProgressPreference='Continue'
    Remove-Item $file -Force 2>&1 > $null
}

function LogWrap($msg, $action) {
    Write-Host -NoNewline "$msg . . . "
    try {
        $buff=Invoke-Command -ScriptBlock $action
        if($LastExitCode -eq 0) {
            Write-Host -NoNewline -ForegroundColor 'green' "done`n"
        } else {
            Write-Host -NoNewline -ForegroundColor 'yellow' "skipped`n"
        }
    } catch {
        Write-Host -NoNewline -ForegroundColor 'red' "failed`n"
        Write-Host -NoNewline -ForegroundColor 'red' $_
        # exit
    }
}

try
{
    LogWrap "Downloading DocFx package" {
        if(Test-Path "./docfx") { return -1 }
        $file=FetchAndDownloadRelease "dotnet/docfx" "docfx.zip"
        if($LastExitCode -ne 0) { throw $buff }
        LogWrap "Extracting DocFx package" {
            if(Test-Path "./docfx") { return -1 }
            ExtractArchive -Path $file
            if($LastExitCode -ne 0) { throw $buff }
        }
    }
    # Write-Host -NoNewline "Downloading DocFx package . . . "
    # if(!(Test-Path "./docfx")) {
    #     $file=FetchAndDownloadRelease "dotnet/docfx" "docfx.zip"
    #     if($LastExitCode -eq 1) {
    #         Write-Host -NoNewline -ForegroundColor 'green' "done`n"
    #     } else {
    #         Write-Host -NoNewline -ForegroundColor 'red' "failed`n"
    #     }
    # } else {
    #     Write-Host -NoNewline -ForegroundColor 'yellow' "skipped`n"
    # }
    # Write-Host -NoNewline "Extracting DocFx package . . . "
    # if(!(Test-Path "./docfx")) {
    #     ExtractArchive $file
    #     if($LastExitCode -lt 1) {
    #         Write-Host -NoNewline -ForegroundColor 'green' "done`n"
    #     } else {
    #         Write-Host -NoNewline -ForegroundColor 'red' "failed`n"
    #     }
    # } else {
    #     Write-Host -NoNewline -ForegroundColor 'yellow' "skipped`n"
    # }

    Write-Host -NoNewline "Downloading DocFx TypeScriptReference package . . . "
    if(!(Test-Path "./templates/docfx-plugins-typescriptreference")) {
        $file=FetchAndDownloadRelease "Lhoerion/DocFx.Plugins.TypeScriptReference" "docfx-plugins-typescriptreference.zip"
        if($LastExitCode -lt 1) {
            Write-Host -NoNewline -ForegroundColor 'green' "done`n"
        } else {
            Write-Host -NoNewline -ForegroundColor 'red' "failed`n"
        }
    } else {
        Write-Host -NoNewline -ForegroundColor 'yellow' "skipped`n"
    }
    Write-Host -NoNewline "Extracting DocFx TypeScriptReference package . . . "
    if(!(Test-Path "./templates/docfx-plugins-typescriptreference")) {
        ExtractArchive $file "./templates"
        if($LastExitCode -lt 1) {
            Write-Host -NoNewline -ForegroundColor 'green' "done`n"
        } else {
            Write-Host -NoNewline -ForegroundColor 'red' "failed`n"
        }
    } else {
        Write-Host -NoNewline -ForegroundColor 'yellow' "skipped`n"
    }

    # npm init -y > $null

    # LogWrap "Downloading node dependencies" {
    #     $buff=npm i -D "typescript" 2>&1 6>$null
    #     if($LastExitCode -ne 0) { throw $buff }
    #     $buff=npm i -D "typedoc" 2>&1 6>$null
    #     if($LastExitCode -ne 0) { throw $buff }
    #     $buff=npm i -D "git://github.com/Lhoerion/type2docfx.git#patch-1" 2>&1 6>$null
    #     if($LastExitCode -ne 0) { throw $buff }
    # }
    LogWrap "Installing node dependencies" {
        ($buff=yarn install 6>$null) -or ($buff=npm install 6>$null) >$null
        if($LastExitCode -ne 0) { throw $buff }
    }
    # Write-Host -NoNewline "Downloading node dependencies . . . "
    # try {
    #     $buff=npm i -D "typescript" 2>&1 6>$null
    #     if($LastExitCode -ne 0) { throw }
    #     $buff=npm i -D "typeoc" 2>&1 6>$null
    #     if($LastExitCode -ne 0) { throw }
    #     $buff=npm i -D "git://github.com/Lhoerion/type2docfx.git#patch-1" 2>&1 6>$null
    #     if($LastExitCode -ne 0) { throw }
    #     Write-Host -NoNewline -ForegroundColor 'green' "done`n"
    # } catch {
    #     Write-Host -NoNewline -ForegroundColor 'red' "failed`n"
    #     echo $buff
    #     exit
    # }

    LogWrap "Generating project metadata" {
        $buff=npx typedoc --options './typedoc.json' 2>&1 6>$null
        if($LastExitCode -ne 0) { throw $buff }
        $buff=npx type2docfx './output.json' './api' --basePath '.' --sourceUrl 'https://github.com/altmp/altv-types' --sourceBranch 'master' --disableAlphabetOrder 2>&1 6>$null
        if($LastExitCode -ne 0) { throw $buff }
    }
    ./docfx/docfx "docfx.json" --serve -p 8080
}
finally
{
    Cleanup
}
