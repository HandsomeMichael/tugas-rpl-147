// Prestasi Data
const prestasiData = [
    {
        title: "Juara 1 Lomba Coding Tingkat Provinsi",
        description: "Tim Programming SMK TI Bali Global - 2023",
        icon: "fa-trophy"
    },
    {
        title: "Finalis Kompetisi Keamanan Siber Nasional",
        description: "Tim Cyber Security SMK TI Bali Global - 2023",
        icon: "fa-shield-alt"
    },
    {
        title: "Juara 3 Desain Aplikasi Mobile",
        description: "Tim UI/UX Design SMK TI Bali Global - 2022",
        icon: "fa-mobile-alt"
    }
];

// Siswa Data
const siswaData = [
    {
        nis: "202301001",
        name: "Bryant Zeb",
        jurusan: "rpl",
        kelas: "XII RPL 1",
        phone: "081234567890",
        email: "brayen@smktibaliglobal.sch.id",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Siswa berprestasi di bidang pemrograman web, aktif dalam ekstrakurikuler robotika."
    },
    {
        nis: "202301031",
        name: "I Gede Mokolomban",
        jurusan: "rpl",
        kelas: "XI RPL 1",
        phone: "081234567234",
        email: "ombainam@smktibaliglobal.sch.id",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Siswa berprestasi di bidang pemrograman web, aktif dalam ekstrakurikuler robotika."
    },
    {
        nis: "203201001",
        name: "I Putu Nasi Ayam",
        jurusan: "rpl",
        kelas: "XII RPL 1",
        phone: "08324742334",
        email: "gogo@smktibaliglobal.sch.id",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Siswa berprestasi di bidang pemrograman web, aktif dalam ekstrakurikuler robotika."
    },
    {
        nis: "202551001",
        name: "I Gogo Mahendra",
        jurusan: "rpl",
        kelas: "XII RPL 2",
        phone: "081234567890",
        email: "tai@smktibaliglobal.sch.id",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Siswa berprestasi di bidang pemrograman web, aktif dalam ekstrakurikuler robotika."
    },
    {
        nis: "202322001",
        name: "I Made Adi Putra",
        jurusan: "rpl",
        kelas: "XII RPL 1",
        phone: "081234567890",
        email: "adi.putra@smktibaliglobal.sch.id",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Siswa berprestasi di bidang pemrograman web, aktif dalam ekstrakurikuler robotika."
    },
    {
        nis: "202301002",
        name: "Ni Luh Putu Sari",
        jurusan: "dkv",
        kelas: "XII DKV 2",
        phone: "081234567891",
        email: "sari.putu@smktibaliglobal.sch.id",
        photo: "https://randomuser.me/api/portraits/women/1.jpg",
        bio: "Berprestasi dalam lomba desain grafis tingkat nasional, spesialisasi ilustrasi digital."
    },
    // Add more siswa data as needed (about 20-30 records)
];

document.addEventListener('DOMContentLoaded', function() {
    // Load Prestasi
    const prestasiContainer = document.getElementById('prestasiContainer');
    prestasiData.forEach(prestasi => {
        const card = document.createElement('div');
        card.className = 'prestasi-card';
        card.innerHTML = `
            <div class="prestasi-icon">
                <i class="fas ${prestasi.icon}"></i>
            </div>
            <div class="prestasi-content">
                <h3>${prestasi.title}</h3>
                <p>${prestasi.description}</p>
            </div>
        `;
        prestasiContainer.appendChild(card);
    });

    // Load Siswa Table
    const tableBody = document.getElementById('siswaTableBody');
    let currentPage = 1;
    const rowsPerPage = 10;
    
    function renderTable(page) {
        tableBody.innerHTML = '';
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedData = siswaData.slice(start, end);
        
        paginatedData.forEach((siswa, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${start + index + 1}</td>
                <td>${siswa.nis}</td>
                <td>${siswa.name}</td>
                <td><span class="jurusan-badge jurusan-${siswa.jurusan}">${siswa.jurusan.toUpperCase()}</span></td>
                <td>${siswa.kelas}</td>
                <td><button class="action-btn" data-nis="${siswa.nis}">Detail</button></td>
            `;
            tableBody.appendChild(row);
        });
        
        document.getElementById('pageInfo').textContent = `Halaman ${page} dari ${Math.ceil(siswaData.length / rowsPerPage)}`;
        document.getElementById('prevPage').disabled = page === 1;
        document.getElementById('nextPage').disabled = page === Math.ceil(siswaData.length / rowsPerPage);
    }
    
    // Pagination
    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable(currentPage);
        }
    });
    
    document.getElementById('nextPage').addEventListener('click', () => {
        if (currentPage < Math.ceil(siswaData.length / rowsPerPage)) {
            currentPage++;
            renderTable(currentPage);
        }
    });
    
    // Filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            
            if (filter === 'all') {
                renderTable(currentPage);
            } else {
                const filteredData = siswaData.filter(siswa => siswa.jurusan === filter);
                // Implement filtered pagination if needed
            }
        });
    });
    
    // Modal
    const modal = document.getElementById('siswaModal');
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('action-btn')) {
            const nis = e.target.getAttribute('data-nis');
            const siswa = siswaData.find(s => s.nis === nis);
            
            if (siswa) {
                document.getElementById('modalSiswaPhoto').style.backgroundImage = `url(${siswa.photo})`;
                document.getElementById('modalSiswaName').textContent = siswa.name;
                document.getElementById('modalSiswaNis').textContent = siswa.nis;
                document.getElementById('modalSiswaKelas').textContent = siswa.kelas;
                document.getElementById('modalSiswaJurusan').textContent = siswa.jurusan.toUpperCase();
                document.getElementById('modalSiswaPhone').textContent = siswa.phone;
                document.getElementById('modalSiswaEmail').textContent = siswa.email;
                document.getElementById('modalSiswaBio').textContent = siswa.bio;
                
                modal.style.display = 'block';
            }
        }
        
        if (e.target.classList.contains('close-modal'))
        {
            modal.style.display = 'none';
        }
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Initial render
    renderTable(currentPage);
});