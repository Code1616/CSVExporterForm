function saveData(firstName, lastName, mobile) {
    let data = JSON.parse(localStorage.getItem("userData")) || [];
    data.push({ firstName, lastName, mobile });
    localStorage.setItem("userData", JSON.stringify(data));
}

function downloadCSV() {
    const data = JSON.parse(localStorage.getItem("userData")) || [];
    if (data.length === 0) {
        alert('هیچ داده‌ای برای دانلود موجود نیست.');
        return;
    }

    const header = "نام,نام خانوادگی,شماره موبایل\n";
    const rows = data.map(item => `${item.firstName},${item.lastName},${item.mobile}`).join("\n");
    const csvContent = header + rows;

    const blob = new Blob([`\uFEFF${csvContent}`], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.csv';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function clearLocalStorage() {
    if (confirm('آیا مطمئن هستید که می‌خواهید تمام اطلاعات را پاک کنید؟')) {
        localStorage.removeItem("userData");
        alert('اطلاعات با موفقیت حذف شد!');
    }
}

document.getElementById('faBtn').addEventListener('click', () => switchLanguage('fa'));
document.getElementById('enBtn').addEventListener('click', () => switchLanguage('en'));

function switchLanguage(lang) {
    const isFarsi = lang === 'fa';
    document.getElementById('faBtn').classList.toggle('active', isFarsi);
    document.getElementById('enBtn').classList.toggle('active', !isFarsi);
    document.querySelector('.form-container').style.direction = isFarsi ? 'rtl' : 'ltr';
    document.getElementById('formTitle').textContent = isFarsi ? 'فرم ثبت اطلاعات' : 'Information Form';
    document.getElementById('firstName').placeholder = isFarsi ? 'نام' : 'First Name';
    document.getElementById('lastName').placeholder = isFarsi ? 'نام خانوادگی' : 'Last Name';
    document.getElementById('mobile').placeholder = isFarsi ? 'شماره موبایل' : 'Mobile Number';
    document.getElementById('saveBtn').textContent = isFarsi ? 'ذخیره اطلاعات' : 'Save Data';
    document.getElementById('downloadBtn').textContent = isFarsi ? 'دانلود فایل CSV' : 'Download CSV';
    document.getElementById('clearBtn').textContent = isFarsi ? 'حذف اطلاعات ذخیره شده' : 'Clear Saved Data';
}

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const mobile = document.getElementById('mobile').value;

    saveData(firstName, lastName, mobile);
    document.getElementById('userForm').reset();
    alert('اطلاعات با موفقیت ذخیره شد!');
});