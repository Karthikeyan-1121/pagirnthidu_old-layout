/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!************************************************************!*\
  !*** ../demo1/src/js/pages/crud/file-upload/dropzonejs.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */

// Class definition

var KTDropzoneDemo = function () {
    // Private functions
    var demo1 = function () {
        

        // file type validation
        $('#kt_dropzone_3').dropzone({
            url: "https://grouppal.in/admincpanel/fileupload.php", // Set the url for your upload script location
            paramName: "uploaded_file", // The name that will be used to transfer the file
            maxFiles: 10,
            maxFilesize: 10, // MB
            addRemoveLinks: true,
            acceptedFiles: "image/*,application/pdf,.psd",
            accept: function(file, done) {
                
                    done();
               
            }
        });
    }

    

    return {
        // public functions
        init: function() {
            demo1();            
        }
    };
}();

KTUtil.ready(function() {
    KTDropzoneDemo.init();
});

/******/ })()
;
//# sourceMappingURL=dropzonejs.js.map