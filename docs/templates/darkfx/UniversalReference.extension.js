// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.

var releaseStages = ['alpha', 'beta', 'public'];

/**
 * This method will be called at the start of exports.transform in UniversalReference.html.primary.js
 */
exports.preTransform = function (model) {
  handleReleaseStages(model);
  if (model.children) {
    normalizeLanguageValuePairs(model.children).forEach(function (item) {
      handleReleaseStages(item);
    });
  };
  return model;
}

/**
 * This method will be called at the end of exports.transform in UniversalReference.html.primary.js
 */
exports.postTransform = function (model) {
  return model;
}

function handleReleaseStages(vm) {
  if(vm.releaseStage) {
    if(vm.releaseStage.indexOf('beta') !== -1) {
      vm.releaseStage.unshift(releaseStages[0]);
    }
    if(vm.releaseStage.indexOf('public') !== -1) {
      vm.releaseStage = releaseStages;
    }
    vm.releaseStage = vm.releaseStage.reverse();
  } else {
    vm.releaseStage = null;
  }
}

function normalizeLanguageValuePairs(list) {
  if (list[0] && list[0].lang && list[0].value) {
    return list[0].value;
  }
  return list;
}
