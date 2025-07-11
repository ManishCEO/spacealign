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
    { name: 'Global Marketing', code: 'Global Marketing' },
    { name: 'QUA-Quality/Regulatory', code: 'QUA-Quality/Regulatory' }
];

let admins = [
    { code: 'KEF-Controllership', name: 'XYZ-1', value: 'XYZ-1',deptCode: 'XYZ-1'},
    { code: 'KEF-Controllership', name: 'XYZ-2', value: 'XYZ-2', deptCode: 'XYZ-2' },
    { code: 'KEF-Controllership', name: 'XYZ-3', value: 'XYZ-3', deptCode: 'XYZ-3' },
    { code: 'R&D', name: 'Ankit Sharma', value: 'Ankit Sharma' , deptCode: 'Ankit Sharma'},
    { code: 'R&D', name: 'Kamal Kumar', value: 'Kamal Kumar', deptCode: 'Kamal Kumar' },
    { code: 'R&D', name: 'Lalit', value: 'Lalit', deptCode: 'Lalit' },
    { code: 'LJ1', name: 'Richa', value: 'Richa' , deptCode: 'Richa'},
    { code: 'R&D', name: 'Rakhi', value: 'Rakhi', deptCode: 'Rakhi' },
    { code: 'R&D', name: 'roli', value: 'roli', deptCode: 'roli' },
    { code: 'Business Finance', name: 'MR Singh', value: 'MR Singh', deptCode: 'MR Singh' },
    { code: 'KGSO-SERVICES ORG', name: 'Gopal', value: 'Gopal', deptCode: 'Gopal' },
    { code: 'KGSO-SERVICES ORG', name: 'Kamaljit', value: 'Kamaljit', deptCode: 'Kamaljit' },
    { code: 'KGSESO', name: 'Ankit', value: 'Ankit' , deptCode: 'Ankit'},
    { code: 'KGSGCO', name: 'Seema Devi', value: 'Seema Devi', deptCode: 'Seema Devi' },
    { code: 'HR', name: 'Palak', value: 'Palak', deptCode: 'Palak' },
    { code: 'WPS', name: 'MR Jio', value: 'MR Jio' , deptCode: 'MR Jio'},
    { code: 'LEGAL', name: 'Ms Rani', value: 'Ms Rani', deptCode: 'Ms Rani' },
    { code: 'GLOBAL IT', name: 'Ritu', value: 'Ritu', deptCode: 'Ritu' },
    { code: 'Order Fulfilment', name: 'Mr Kumar2', value: 'Mr Kumar2' , deptCode: 'Mr Kumar2'},
    { code: 'GLOBAL TAX', name: 'Tejinder', value: 'Tejinder', deptCode: 'Tejinder' },
    { code: 'Global Sourcing', name: 'Naresh', value: 'Naresh' , deptCode: 'Naresh'},
    { code: 'Corp Communication & CGM', name: 'Jone', value: 'Jone' , deptCode: 'Jone'},
    { code: 'Quality', name: 'Golu', value: 'Golu', deptCode: 'Golu' },
    { code: 'Global Marketing', name: 'Tarun', value: 'Tarun', deptCode: 'Tarun' },
    { code: 'QUA-Quality/Regulatory', name: 'Ramu', value: 'Ramu' , deptCode: 'Ramu'}

];

let branch = [
    { deptCode: 'XYZ-1', name: 'FBIS', value: 'FBIS'},
    { deptCode: 'XYZ-1', name: 'GFRC', value: 'GFRC' },
    { deptCode: 'XYZ-2', name: 'AP', value: 'AP'},
    { deptCode: 'XYZ-2', name: 'C&C', value: 'C&C' },
    { deptCode: 'XYZ-2', name: 'CCO', value: 'CCO' },
    { deptCode: 'XYZ-2', name: 'AR', value: 'AR' },
    { deptCode: 'XYZ-3', name: 'SOX-PMO', value: 'SOX-PMO'},
    { deptCode: 'XYZ-3', name: 'Internal Audit', value: 'Internal Audit'},
    { deptCode: 'Ankit Sharma', name: 'KTO SSP', value: 'KTO SSP' },
    { deptCode: 'Kamal Kumar', name: 'Software and AI Labs', value: 'Software and AI Labs' },
    { deptCode: 'Lalit', name: 'HFM-COE', value: 'HFM-COE' },
    { deptCode: 'Rakhi', name: 'DP-COE', value: 'DP-COE' },
    { deptCode: 'Richa', name: 'CSG-Wireless', value: 'CSG-Wireless' },
    { deptCode: 'roli', name: 'PSS', value: 'PSS' },
    { deptCode: 'MR Singh', name: 'KBRT', value: 'KBRT'},
    { deptCode: 'Gopal', name: 'SLSC', value: 'SLSC' },
    { deptCode: 'Kamaljit', name: 'SLSC', value: 'SLSC' },
    { deptCode: 'Ankit', name: 'GBS', value: 'GBS'},
    { deptCode: 'Seema Devi', name: 'CCC', value: 'CCC' },
    { deptCode: 'Palak', name: 'HR', value: 'HR'},
    { deptCode: 'MR Jio', name: 'WPS', value: 'WPS'},
    { deptCode: 'Ms Rani', name: 'LEGAL', value: 'LEGAL' },
    { deptCode: 'Ritu', name: 'GLOBAL IT', value: 'GLOBAL IT'},
    { deptCode: 'Mr Kumar2', name: 'Order Fulfilment', value: 'Order Fulfilment'},
    { deptCode: 'Tejinder', name: 'GLOBAL TAX', value: 'GLOBAL TAX'},
    { deptCode: 'Naresh', name: 'Global Sourcing', value: 'Global Sourcing' },
    { deptCode: 'Jone', name: 'Corp Communication & CGM', value: 'Corp Communication & CGM' },
    { deptCode: 'Golu', name: 'Quality', value: 'Quality'},  
    { deptCode: 'Tarun', name: 'Global Marketing', value: 'Global Marketing'},
    { deptCode: 'Ramu', name: 'QUA-Quality/Regulatory', value: 'QUA-Quality/Regulatory' }
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

