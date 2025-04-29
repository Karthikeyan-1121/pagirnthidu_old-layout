/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!******************************************************************************!*\
  !*** ../demo1/src/js/pages/crud/datatables/data-sources/ajax-server-side.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */

var KTDatatablesDataSourceAjaxServer = function() {

	var initTable1 = function() {
		var table = $('#kt_datatable');

		// begin first table
		table.DataTable({
			responsive: true,
			searchDelay: 500,
			processing: true,
			serverSide: true,
			ajax: {
				url: 'https://grouppal.in/admincpanel/userlistjsonserver.php',
				type: 'POST',
				data: {
					// parameters for custom backend script demo
					columnsDef: [
						'RecordID', 'firstName',
						'email', 'code'],
				},
			},
			columns: [
				{data: 'RecordID'},
				{data: 'firstName'},
				{data: 'email'},
				{data: 'code'},				
			],
			
		});
	};

	return {

		//main function to initiate the module
		init: function() {
			initTable1();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesDataSourceAjaxServer.init();
});

/******/ })()
;
//# sourceMappingURL=ajax-server-side.js.map