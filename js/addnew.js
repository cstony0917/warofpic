var serverBase = 'http://localhost/warofpic_server/index.php/';
if(!dev){
	serverBase = 'http://54.238.147.136/index.php/';
}
var processResult = function(res){
	alert(res);
};
$(function(){


	var uploadInputBox = $('input[type=file]');

	//uploadInputBox.bootstrapFileInput();
//ajaxBootstrapUpload
//ajaxfileupload
   uploadInputBox.ajaxfileupload({
      'action': serverBase + 'picture/add',
      'submit_button' : $('#upload'),
      'params' : {'des' : 'file name'},
      'valid_extensions' : ['gif','png','jpg','jpeg'],
      'onComplete':function(response){
		processResult(response);
      }
    });


   

	// $('#upload').click(function(){
	// 	$.ajaxFileUpload
	// 	(
	// 		{
	// 			url:serverBase + 'picture/add',
	// 			secureuri:false,
	// 			fileElementId:'fileToUpload',
	// 			dataType: 'json',
	// 			data:{name:'logan', id:'id'},
	// 			success: function (data, status)
	// 			{
	// 				if(typeof(data.error) != 'undefined')
	// 				{
	// 					if(data.error != '')
	// 					{
	// 						alert(data.error);
	// 					}else
	// 					{
	// 						alert(data.msg);
	// 					}
	// 				}
	// 			},
	// 			error: function (data, status, e)
	// 			{
	// 				alert(e);
	// 			}
	// 		}
	// 	)
	// });


});
