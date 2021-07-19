// mdファイルを読み込んで表示
window.onload = function(){
  markdownMemo.innerHTML = marked(doc);
};

/**
* 指定したIDの要素にクラス追加
* @param {string} className 
* @param {string} targetId 
*/
function addClassToId(className, targetId) {
  document.getElementById(targetId).classList.add(className);
}

/**
* 指定したIDの要素からクラス削除
* @param {string} className 
* @param {string} targetId 
*/
function removeClassFromId(className, targetId) {
  document.getElementById(targetId).classList.remove(className);
}

/**
* 指定したIDの要素に属性追加
* @param {string} attribute 
* @param {string} targetId 
*/
function addAttributeToId(attribute, targetId) {
  document.getElementById(targetId).setAttribute(attribute, true);
}

/**
* 指定したIDの要素から属性削除
* @param {string} attribute 
* @param {string} targetId 
*/
function removeAttributeFromId(attribute, targetId) {
  document.getElementById(targetId).removeAttribute(attribute);
}

/**
* 指定したクラスの要素にクラス追加
* @param {string} className 
* @param {string} targetClass 
*/
function addClassToClass(className, targetClass) {
  Array.prototype.forEach.call(document.getElementsByClassName(targetClass), function(element) {
      element.classList.add(className);
  })
}

/**
* 指定したクラスの要素からクラス削除
* @param {string} className 
* @param {string} targetClass 
*/
function removeClassFromClass(className, targetClass) {
  Array.prototype.forEach.call(document.getElementsByClassName(targetClass), function(element) {
      element.classList.remove(className);
  })
}

/**
* 指定したクラスの要素に属性追加
* @param {string} attribute 
* @param {string} targetClass 
*/
function addAttributeToClass(attribute, targetClass) {
  Array.prototype.forEach.call(document.getElementsByClassName(targetClass), function(element) {
      element.setAttribute(attribute, true);
  })
}

/**
* 指定したクラスの要素から属性削除
* @param {string} attribute 
* @param {string} targetClass 
*/
function removeAttributeFromClass(attribute, targetClass) {
  Array.prototype.forEach.call(document.getElementsByClassName(targetClass), function(element) {
      element.removeAttribute(attribute);
  })
}

/**
* 指定したIDの要素を非表示
* @param {string} targetId 
*/
function hideId(targetId) {
  addClassToId('d-none', targetId);
}

/**
* 指定したIDの要素を表示
* @param {string} targetId 
*/
function showId(targetId) {
  removeClassFromId('d-none', targetId);
}

/**
* 指定したIDの要素を非活性化
* @param {string} targetId 
*/
function disableId(targetId) {
  addAttributeToId('disabled', targetId);
}

/**
* 指定したIDの要素を活性化
* @param {string} targetId 
*/
function enableId(targetId) {
  removeAttributeFromId('disabled', targetId);
}

/**
* 指定したクラスの要素を非表示
* @param {string} targetClass
*/
function hideClass(targetClass) {
  addClassToClass('d-none', targetClass);
}

/**
* 指定したクラスの要素を表示
* @param {string} targetClass
*/
function showClass(targetClass) {
  removeClassFromClass('d-none', targetClass);
}

/**
* 指定したクラスの要素を非活性化
* @param {string} targetClass
*/
function disableClass(targetClass) {
  addAttributeToClass('disabled', targetClass);
}

/**
* 指定したクラスの要素を活性化
* @param {string} targetClass
*/
function enableClass(targetClass) {
  removeAttributeFromClass('disabled', targetClass);
}