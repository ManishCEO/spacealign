let departments = [
    { name: 'KEF-Controllership', code: 'KEF-Controllership' },
    { name: 'R&D', code: 'R&D' },
    { name: 'Business Finance', code: 'Business Finance' },
    { name: 'KGSO-SERVICES ORG', code: 'KGSO-SERVICES ORG' },
    { name: 'KGSGCO', code: 'KGSGCO' },
    { name: 'KGSESO', code: 'KGSESO' },
    { name: 'HR', code: 'HR' },
    { name: 'WPS', code: 'WPS' },
    { name: 'LEGAL', code: 'LEGAL' },
    { name: 'GLOBAL IT', code: 'GLOBAL IT' },
    { name: 'Order Fulfilment', code: 'Order Fulfilment' },
    { name: 'GLOBAL TAX', code: 'GLOBAL TAX' },
    { name: 'Global Sourcing', code: 'Global Sourcing' },
    { name: 'Corp Communication & CGM', code: 'Corp Communication & CGM' },
    { name: 'Quality', code: 'QY' },
    { name: 'Keysight Global Marketing', code: 'Keysight Global Marketing' },
    { name: 'QUA-Quality/Regulatory', code: 'QUA-Quality/Regulatory' }
];

let admins = [
    { code: 'KEF-Controllership', name: 'Monisha Gupta', value: 'Monisha Gupta',deptCode: 'Monisha Gupta'},
    { code: 'KEF-Controllership', name: 'Vandana Gulati', value: 'Vandana Gulati', deptCode: 'Vandana Gulati' },
    { code: 'KEF-Controllership', name: 'Bhavna Mohan', value: 'Bhavna Mohan', deptCode: 'Bhavna Mohan' },
    { code: 'R&D', name: 'Swati Karnwal', value: 'Swati Karnwal' , deptCode: 'Swati Karnwal'},
    { code: 'R&D', name: 'Sumitra Kumari', value: 'Sumitra Kumari', deptCode: 'Sumitra Kumari' },
    { code: 'R&D', name: 'Liji Harihara', value: 'Liji Harihara', deptCode: 'Liji Harihara' },
    { code: 'LJ1', name: 'Aarti Jalali', value: 'Aarti Jalali' , deptCode: 'Aarti Jalali'},
    { code: 'R&D', name: 'Rakhi Sardana', value: 'Rakhi Sardana', deptCode: 'Rakhi Sardana' },
    { code: 'R&D', name: 'Shilpi Bhattacharya', value: 'Shilpi Bhattacharya', deptCode: 'Shilpi Bhattacharya' },
    { code: 'Business Finance', name: 'Ritu Singh', value: 'Ritu Singh', deptCode: 'Ritu Singh' },
    { code: 'KGSO-SERVICES ORG', name: 'Pooja Basra', value: 'Pooja Basra', deptCode: 'Pooja Basra' },
    { code: 'KGSO-SERVICES ORG', name: 'Rakhi Sharma', value: 'Rakhi Sharma', deptCode: 'Rakhi Sharma' },
    { code: 'KGSESO', name: 'Namrta Sethi', value: 'Namrta Sethi' , deptCode: 'Namrta Sethi'},
    { code: 'KGSGCO', name: 'Rohit Sharma', value: 'Rohit Sharma', deptCode: 'Rohit Sharma' },
    { code: 'HR', name: 'Shiv Kishor', value: 'Shiv Kishor', deptCode: 'Shiv Kishor' },
    { code: 'WPS', name: 'Gurvinder Singh', value: 'Gurvinder Singh' , deptCode: 'Gurvinder Singh'},
    { code: 'LEGAL', name: 'Aarti Rani', value: 'Aarti Rani', deptCode: 'Aarti Rani' },
    { code: 'GLOBAL IT', name: 'Kamini Pundir', value: 'Kamini Pundir', deptCode: 'Kamini Pundir' },
    { code: 'Order Fulfilment', name: 'Jeevan Kumar', value: 'Jeevan Kumar' , deptCode: 'Jeevan Kumar'},
    { code: 'GLOBAL TAX', name: 'Preeti KM', value: 'Preeti KM', deptCode: 'Preeti KM' },
    { code: 'Global Sourcing', name: 'Rajnish Kumar', value: 'Rajnish Kumar' , deptCode: 'Rajnish Kumar'},
    { code: 'Corp Communication & CGM', name: 'Dimple Frazer', value: 'Dimple Frazer' , deptCode: 'Dimple Frazer'},
    { code: 'Quality', name: 'Mohit Sharma', value: 'Mohit Sharma', deptCode: 'Mohit Sharma' },
    { code: 'Keysight Global Marketing', name: 'Mukesh Satjia', value: 'Mukesh Satjia', deptCode: 'Mukesh Satjia' },
    { code: 'QUA-Quality/Regulatory', name: 'Aashvin Kumar', value: 'Aashvin Kumar' , deptCode: 'Aashvin Kumar'}

];

let branch = [
    { deptCode: 'Monisha Gupta', name: 'FBIS', value: 'FBIS'},
    { deptCode: 'Monisha Gupta', name: 'GFRC', value: 'GFRC' },
    { deptCode: 'Vandana Gulati', name: 'AP', value: 'AP'},
    { deptCode: 'Vandana Gulati', name: 'C&C', value: 'C&C' },
    { deptCode: 'Vandana Gulati', name: 'CCO', value: 'CCO' },
    { deptCode: 'Vandana Gulati', name: 'AR', value: 'AR' },
    { deptCode: 'Bhavna Mohan', name: 'SOX-PMO', value: 'SOX-PMO'},
    { deptCode: 'Bhavna Mohan', name: 'Internal Audit', value: 'Internal Audit'},
    { deptCode: 'Swati Karnwal', name: 'KTO SSP', value: 'KTO SSP' },
    { deptCode: 'Sumitra Kumari', name: 'Software and AI Labs', value: 'Software and AI Labs' },
    { deptCode: 'Liji Harihara', name: 'HFM-COE', value: 'HFM-COE' },
    { deptCode: 'Rakhi Sardana', name: 'DP-COE', value: 'DP-COE' },
    { deptCode: 'Aarti Jalali', name: 'CSG-Wireless', value: 'CSG-Wireless' },
    { deptCode: 'Shilpi Bhattacharya', name: 'PSS', value: 'PSS' },
    { deptCode: 'Ritu Singh', name: 'KBRT', value: 'KBRT'},
    { deptCode: 'Pooja Basra', name: 'SLSC', value: 'SLSC' },
    { deptCode: 'Rakhi Sharma', name: 'SLSC', value: 'SLSC' },
    { deptCode: 'Namrta Sethi', name: 'GBS', value: 'GBS'},
    { deptCode: 'Rohit Sharma', name: 'CCC', value: 'CCC' },
    { deptCode: 'Shiv Kishor', name: 'HR', value: 'HR'},
    { deptCode: 'Gurvinder Singh', name: 'WPS', value: 'WPS'},
    { deptCode: 'Aarti Rani', name: 'LEGAL', value: 'LEGAL' },
    { deptCode: 'Kamini Pundir', name: 'GLOBAL IT', value: 'GLOBAL IT'},
    { deptCode: 'Jeevan Kumar', name: 'Order Fulfilment', value: 'Order Fulfilment'},
    { deptCode: 'Preeti KM', name: 'GLOBAL TAX', value: 'GLOBAL TAX'},
    { deptCode: 'Rajnish Kumar', name: 'Global Sourcing', value: 'Global Sourcing' },
    { deptCode: 'Dimple Frazer', name: 'Corp Communication & CGM', value: 'Corp Communication & CGM' },
    { deptCode: 'Mohit Sharma', name: 'Quality', value: 'Quality'},  
    { deptCode: 'Mukesh Satjia', name: 'Keysight Global Marketing', value: 'Keysight Global Marketing'},
    { deptCode: 'Aashvin Kumar', name: 'QUA-Quality/Regulatory', value: 'QUA-Quality/Regulatory' }
];



let selectdepartment = document.getElementById('Selectdept');
let selectadmin = document.getElementById('admin');
let selectbranch = document.getElementById('selectbr');


// Default Department Option
let defaultDeptOption = document.createElement('option');
defaultDeptOption.text = 'Select Department';
defaultDeptOption.value = '';
defaultDeptOption.disabled = true;
defaultDeptOption.selected = true;
selectdepartment.appendChild(defaultDeptOption);

// Populate Departments
for (let dept of departments) {
    let option = document.createElement('option');
    option.text = dept.name;
    option.value = dept.code;
    selectdepartment.appendChild(option);
}
/*
// On Department Change → Load Branches
selectdepartment.addEventListener('change', function () {
    let selectedDepartment = this.value;
    selectbranch.innerHTML = '<option value="">Select Branch</option>';
    selectadmin.innerHTML = '<option value="">Select Admin</option>';

    for (let br of branch) {
        if (br.deptCode === selectedDepartment) {
            let option = document.createElement('option');
            option.text = br.name;
            option.value = br.code;  // Use branch code for admin matching
            selectbranch.appendChild(option);
        }
    }
}); */


selectdepartment.addEventListener('change', function () {
    let selectedDepartment = this.value;
    selectadmin.innerHTML = '<option value="">Select admin</option>';
    selectbranch.innerHTML = '<option value="">Select branch</option>';

    for (let admin of admins) {
        if (admin.code === selectedDepartment) {
            let option = document.createElement('option');
            option.text = admin.name;
            option.value = admin.deptCode;  // Use branch code for admin matching
            selectadmin.appendChild(option);
        }
    }
});

/*

// On Branch Change → Load Admins
selectbranch.addEventListener('change', function () {
    let selectedBranchCode = this.value;
    selectadmin.innerHTML = '<option value="">Select Admin</option>';

    for (let admin of admins) {
        if (admin.code === selectedBranchCode) {
            let option = document.createElement('option');
            option.text = admin.name;
            option.value = admin.value;
            selectadmin.appendChild(option);
        }
    }
}); */

selectadmin.addEventListener('change', function () {
    let selectedBranchCode = this.value;
    selectbranch.innerHTML = '<option value="">Select Branch</option>';

    for (let br of branch) {
        if (br.deptCode === selectedBranchCode) {
            let option = document.createElement('option');
            option.text = br.name;
            option.value = br.value;
            selectbranch.appendChild(option);
        }
    }
});

