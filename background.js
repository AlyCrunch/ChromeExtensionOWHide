'use strict';

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ hide: false }, function () {
    console.log('Hiding is set to ' + hide);
  });
});

function updateIcon() {
  var hide;
  chrome.storage.sync.get('hide', function (data) {
    hide = !data.hide;
    var ulr = hide ? 'logo.png'; 'logo_disable.png';
    chrome.browserAction.setIcon({ path: 'icon' + current + '.png' });
    chrome.storage.sync.set({ enable: hide }, function () {
      console.log('Hiding is set to ' + hide);
    });
  });
  return hide;
};

function makeSomeMagic(){
  updateIcon() ? hideObtainedItems() : showAllItems();
}

function hideObtainedItems() {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0, l = inputs.length; i < l; i++) {
    if (inputs[i].type == 'checkbox')
      if (inputs[i].checked)
        inputs[i].parentNode.style.display = 'none';
  }
}

function showAllItems(){
  var inputs = document.getElementsByTagName('input');
  for (var i = 0, l = inputs.length; i < l; i++) {
    if (inputs[i].type == 'checkbox')
      if (inputs[i].checked)
        inputs[i].parentNode.style.display = '';
}

chrome.browserAction.onClicked.addListener(makeSomeMagic);
