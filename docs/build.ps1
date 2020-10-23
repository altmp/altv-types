param(
    [Switch] $disableChecks = $false,
    [Switch] $debug = $false
)

function Cleanup() {
    if($debug) { return }
    Remove-Item -Path 'docfx.zip' -Force 2>&1 > $null
    Remove-Item -Path 'docfx-plugins-typescriptreference.zip' -Force 2>&1 > $null
    Remove-Item -Path 'package.json' -Force 2>&1 > $null
    Remove-Item -Path 'package-lock.json' -Force 2>&1 > $null
    Remove-Item -Path 'node_modules' -Recurse -Force 2>&1 > $null
}

function GetAssemblyVersion([string] $file) {
    $ver=(Get-Item -Path $file | Select-Object -ExpandProperty VersionInfo).ProductVersion
    $ver.Substring(0, $ver.LastIndexOf('.'))
}

function FetchAndDownloadRelease([string] $repo, [string] $file) {
    $global:ProgressPreference='SilentlyContinue'
    $tag=(Invoke-WebRequest -UseBasicParsing "https://api.github.com/repos/$repo/releases" | ConvertFrom-Json)[0].tag_name
    Invoke-WebRequest -UseBasicParsing "https://github.com/$repo/releases/download/$tag/$file" -Out $file
    $global:ProgressPreference='Continue'
    # Get-Item -Path $file
}

function ExtractArchive([System.IO.FileInfo] $file, [string] $dest) {
    if(!$dest) {
        $dest=$file.FullName.Substring(0, $file.FullName.LastIndexOf('.'))
    }
    Write-Host $file $dest
    $global:ProgressPreference='SilentlyContinue'
    Expand-Archive -Path $file -DestinationPath $dest -Force
    $global:ProgressPreference='Continue'
    Remove-Item $file -Force 2>&1 > $null
}

function LogWrap([string] $msg, [ScriptBlock] $action) {
    Write-Host -NoNewline "$msg . . . "
    try {
        Invoke-Command -NoNewScope -ScriptBlock $action > $null
        if($LastExitCode -eq 0) {
            Write-Host -NoNewline -ForegroundColor 'green' "done`n"
        } else {
            Write-Host -NoNewline -ForegroundColor 'yellow' "skipped`n"
        }
    } catch {
        Write-Host -NoNewline -ForegroundColor 'red' "failed`n"
        Write-Host -ForegroundColor 'red' $_
        exit
    }
}

try
{
    LogWrap "Downloading DocFx package" {
        if(Test-Path "./docfx") { return -1 }
        $buff=FetchAndDownloadRelease "dotnet/docfx" "docfx.zip" 2>&1 6>$null
        if($LastExitCode -ne 0) { throw $buff }
    }
    LogWrap "Extracting DocFx package" {
        if(Test-Path "./docfx") { return -1 }
        $buff=ExtractArchive (Get-Item -Path "docfx.zip") 2>&1
        if($LastExitCode -ne 0) { throw $buff }
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

    LogWrap "Downloading DocFx TypeScriptReference package" {
        if(Test-Path "./templates/docfx-plugins-typescriptreference") { return -1 }
        $buff=FetchAndDownloadRelease "Lhoerion/DocFx.Plugins.TypeScriptReference" "docfx-plugins-typescriptreference.zip" 2>&1 6>$null
        if($LastExitCode -ne 0) { throw $buff }
    }
    LogWrap "Extracting DocFx TypeScriptReference package" {
        if(Test-Path "./templates/docfx-plugins-typescriptreference") { return -1 }
        $buff=ExtractArchive (Get-Item -Path "docfx-plugins-typescriptreference.zip") 2>&1 6>$null
        if($LastExitCode -ne 0) { throw $buff }
    }
    # Write-Host -NoNewline "Downloading DocFx TypeScriptReference package . . . "
    # if(!(Test-Path "./templates/docfx-plugins-typescriptreference")) {
    #     $file=FetchAndDownloadRelease "Lhoerion/DocFx.Plugins.TypeScriptReference" "docfx-plugins-typescriptreference.zip"
    #     if($LastExitCode -lt 1) {
    #         Write-Host -NoNewline -ForegroundColor 'green' "done`n"
    #     } else {
    #         Write-Host -NoNewline -ForegroundColor 'red' "failed`n"
    #     }
    # } else {
    #     Write-Host -NoNewline -ForegroundColor 'yellow' "skipped`n"
    # }
    # Write-Host -NoNewline "Extracting DocFx TypeScriptReference package . . . "
    # if(!(Test-Path "./templates/docfx-plugins-typescriptreference")) {
    #     ExtractArchive $file "./templates"
    #     if($LastExitCode -lt 1) {
    #         Write-Host -NoNewline -ForegroundColor 'green' "done`n"
    #     } else {
    #         Write-Host -NoNewline -ForegroundColor 'red' "failed`n"
    #     }
    # } else {
    #     Write-Host -NoNewline -ForegroundColor 'yellow' "skipped`n"
    # }

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

    LogWrap "Generating project metadata" {
        $buff=npx typedoc --options './typedoc.json' 2>&1 6>$null
        if($LastExitCode -ne 0) { throw $buff }
        $buff=npx type2docfx './output.json' './api' --basePath '.' --sourceUrl 'https://github.com/altmp/altv-types' --sourceBranch 'master' --disableAlphabetOrder 2>&1 6>$null
        if($LastExitCode -ne 0) { throw $buff }
    }

    LogWrap "Tools version" {
        Write-Host "DocFx v$(GetAssemblyVersion ""docfx/docfx.exe"")"
    }

    ./docfx/docfx "docfx.json" --serve -p 8080
}
finally
{
    Cleanup
}
