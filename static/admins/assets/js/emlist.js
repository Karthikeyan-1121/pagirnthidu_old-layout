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
					width : 100,
				},
				{
					field: 'Name',
					autoHide: false,
				},
				{
					field: 'Group1 Member',
					autoHide: false,
					width : 60,
				},
				{
					field: 'Group1 OL',
					autoHide: false,
					width : 50,
				},
				{
					field: 'Group1 SL',
					autoHide: false,
					width : 50,
                },
				{
					field: 'TOTAL  ol',
					autoHide: false,
					width : 50,
				},
				{
					field: 'TOTAL SL',
					autoHide: false,
					width : 50,
                },
                {
					field: 'BADGE',
					autoHide: false,
				},
				{
					field: 'Photo',
					width: 50,
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