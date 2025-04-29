/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*****************************************************************!*\
  !*** ../demo1/src/js/pages/crud/ktdatatable/base/html-table.js ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */

// Class definition

var KTDatatableHtmlTableDemo = function() {
    // Private functions

    // demo initializer
    var demo = function() {

		var datatable = $('#kt_datatable').KTDatatable({
			data: {
				saveState: {cookie: false},
			},
			search: {
				input: $('#kt_datatable_search_query'),
				key: 'generalSearch'
			},
			layout: {
				class: 'datatable-bordered'
			},
			columns: [
				{
					field: 'ID',
					autoHide: false,
                },
                {
					field: 'User ID',
					autoHide: false,
				},
				{
					field: 'Name',
					autoHide: false,
				},
				{
					field: 'Pincode',
					autoHide: false,
				},
				{
					field: 'Total',
					autoHide: false,
                },
                {
					field: 'BADGE',
					autoHide: false,
				},
				
			],
		});



        $('#kt_datatable_search_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });

        $('#kt_datatable_search_type').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Type');
        });

        $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();

    };

    return {
        // Public functions
        init: function() {
            // init dmeo
            demo();
        },
    };
}();

jQuery(document).ready(function() {
	KTDatatableHtmlTableDemo.init();
});

/******/ })()
;
//# sourceMappingURL=html-table.js.map