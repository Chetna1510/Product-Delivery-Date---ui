// Google calander Sync: Open Accordian based on selected options 
$('.google-calendar-sync input[type="radio"]').click(function(){
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".rb_opt").not(targetBox).hide();
    $(targetBox).show();
});

 // Function for " Add more Use Global Holidays" under Holidays
 $(".add-more-holidays").click(function(){
    $(this).attr("disabled", "disabled");
    var index = $("table tbody tr:last-child").index();
    var row = '<tr>' +
        '<td><div class="el-checkbox el-checkbox-green d-uni-col"><input type="checkbox" id="cb_opt_nm_20" value="cb_opt_val_20" checked><label class="el-checkbox-style mb-0" for="cb_opt_nm_20"></label></div></td>' +
        '<td><input type="text" class="form-control ib-small" name="holiday-name" placeholder="Enter Holiday" id="holiday-name"></td>' +
        '<td class="d-flex"><select class="ib-small mr-1" name="min-time" id="mintime"><option value="Select Date">Select Date</option><option value="10-06-2021 to 11-06-2021">10-06-2021</option><option value="11-06-2021 to 02-10-2021">11-06-2021</option></select> To <select class="ib-small ml-1" name="min-time" id="mintime"><option value="Select Date">Select Date</option><option value="01-10-2021">01-10-2021</option><option value="02-10-2021">02-10-2021</option></select></td>' +
        '<td><select class="ib-small" name="min-time" id="mintime"><option value="Recurring Every Year">Recurring Every Year</option><option value="Current Year Only">Current Year Only</option></select></td>' +
        '<td>' + actions + '</td>' +
    '</tr>';
    $('#global-holidays').append(row);		
    $("table tbody tr").eq(index + 1).find(".add_del_sch, .edit_del_sch").toggle();
});

// Edit: Holiday -> Use Global Holidays -> Trageted field 
$(document).on("click", ".globle-holidy-edit", function(){        
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control ib-small" value="' + $(this).text() + '">');
       $(".disable").show();
    });     
    $(this).parents("tr").find("td:first-child").each(function(){
        $(this).html('<div class="el-checkbox el-checkbox-green d-uni-col"><input type="checkbox" class="checkBoxClass" id="cb_opt_nm_19" value="cb_opt_val_19" checked><label class="el-checkbox-style mb-0" for="cb_opt_nm_19"></label></div>');
    });
    $(this).parents("tr").find("td:eq(2)").each(function(){
        $(this).html('<select class="ib-small mr-1" name="min-time" id="date-from"><option value="Select Date">Select Date</option><option value="10-06-2021">10-06-2021</option><option value="11-06-2021">11-06-2021</option></select> To <select class="ib-small ml-1" name="min-time" id="mintime"><option value="Select Date">Select Date</option><option value="01-10-2021">01-10-2021</option><option value="02-10-2021">02-10-2021</option></select>');
    });
    $(this).parents("tr").find("td:eq(3)").each(function(){
        $(this).html('<select class="ib-small mr-1" name="min-time" id="mintime"><option value="Select Holiday Type">Select Holiday Type</option><option value="Current Year Only">Current Year Only</option><option value="Current Year Only">Current Year Only</option></select>');
    });
    $(this).parents("tr").find(".globle-holidy-edit, .add").toggle();
    $(".add-new").attr("disabled", "disabled");
});