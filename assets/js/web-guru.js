
// Default data for staff members
const staffData = [
    {
        id: "0021.001",
        name: "Drs. I Gusti Made Murjana, M.Pd",
        phone: "082146503XXX",
        email: "smktigmmurjana@gmail.com",
        position: "Kepala SMK TI Bali Global Denpasar",
        category: "staff",
        photo: "assets/img/staff/0021.001.png",
        bio: "Memimpin SMK TI Bali Global sejak 2015 dengan visi pengembangan pendidikan vokasi berbasis teknologi. Memiliki pengalaman 20+ tahun di bidang pendidikan kejuruan."
    },
    {
        id: "0022.001",
        name: "I Wayan Asta, S.Kom",
        phone: "081234567890",
        email: "asta@smktibaliglobal.sch.id",
        position: "Guru Pemrograman Web",
        category: "guru",
        photo: "assets/img/staff/ast.png",
        bio: "Spesialis pengembangan web dengan sertifikasi internasional. Mengajar HTML, CSS, JavaScript dan framework modern sejak 2018."
    },
    {
        id: "0021.101",
        name: "IBN. Badra Jayapati, SE",
        phone: "085935111XXX",
        email: "ibnbadra@gmail.com",
        position: "Kepala Tata Usaha",
        category: "staff",
        photo: "assets/img/staff/0021.101.png",
        bio: "Kepala Tata Usaha SMK TI Bali Global Denpasar dengan pengalaman 10+ tahun di administrasi pendidikan."
    },
    {
        id: "0021.002",
        name: "I Nyoman Sucana, M.Kom",
        phone: "081236509XXX",
        email: "suc4n4@gmail.com",
        position: "Wakasek Kurikulum",
        category: "staff",
        photo: "assets/img/staff/0021.002.png",
        bio: "Wakil Kepala Sekolah bidang Kurikulum, spesialis pengembangan kurikulum teknologi informasi."
    },
    {
        id: "0021.003",
        name: "Bagus Putu Eka Wijaya, S.Kom",
        phone: "082146503XXX",
        email: "ghosteka26@gmail.com",
        position: "Wakasek Kesiswaan",
        category: "staff",
        photo: "assets/img/staff/0021.003.png",
        bio: "Wakil Kepala Sekolah bidang Kesiswaan, fokus pada pengembangan karakter siswa."
    },
    {
        id: "0021.004",
        name: "Dewa Made Indra Suarmika, S.Kom",
        phone: "082237442XXX",
        email: "dewaindra22@gmail.com",
        position: "Wakasek Sarpras",
        category: "staff",
        photo: "assets/img/staff/0021.004.png",
        bio: "Wakil Kepala Sekolah bidang Sarana Prasarana, ahli dalam manajemen fasilitas pendidikan teknologi."
    },
    {
        id: "0021.005",
        name: "Ni Wayan Sri Arini, ST., M.Kom",
        phone: "081338512XXX",
        email: "baliaditya13@gmail.com",
        position: "Wakasek Humas",
        category: "staff",
        photo: "assets/img/staff/0021.005.png",
        bio: "Wakil Kepala Sekolah bidang Hubungan Masyarakat, menjalin kerjasama dengan industri dan masyarakat."
    },
    {
        id: "0021.006",
        name: "I Gede Agung Abdi Prasetya, SE",
        phone: "082247033XXX",
        email: "agungabdibali@gmail.com",
        position: "Komka Animasi dan DKV",
        category: "guru",
        photo: "assets/img/staff/0021.006.png",
        bio: "Ketua Kompetensi Keahlian Animasi dan DKV, ahli desain grafis dan animasi digital."
    },
    {
        id: "0021.007",
        name: "A.A Gede Putra Dwi Artajaya, S.Si., M.Kom",
        phone: "082247033XXX",
        email: "agoengdwi86@gmail.com",
        position: "Komka RPL",
        category: "guru",
        photo: "assets/img/staff/0021.007.png",
        bio: "Ketua Kompetensi Keahlian Rekayasa Perangkat Lunak, spesialis pengembangan software."
    },
    {
        id: "0021.008",
        name: "I Komang Arta Wijaya, S.Kom., M.Kom",
        phone: "082247033XXX",
        email: "arta.komang@gmail.com",
        position: "Komka Multimedia",
        category: "guru",
        photo: "assets/img/staff/0021.008.png",
        bio: "Ketua Kompetensi Keahlian Multimedia, ahli produksi konten digital dan broadcasting."
    },
    {
        id: "0021.010",
        name: "I Putu Urip Sutresna Mantra, A.Md.Kom",
        phone: "087862656XXX",
        email: "uripmantra@gmail.com",
        position: "Kepala LAB",
        category: "staff",
        photo: "assets/img/staff/0021.010.png",
        bio: "Kepala Laboratorium Komputer, mengelola fasilitas praktikum teknologi informasi."
    }
];

document.addEventListener('DOMContentLoaded', function() 
{
    const staffContainer = document.getElementById('staffContainer');
    const modal = document.getElementById('staffModal');
    
    // Generate staff cards
    staffData.forEach(staff => {
        const card = document.createElement('div');
        card.className = `staff-card ${staff.category}`;

        // We manually fuck with html because fuck html
        // <div class="staff-photo" style="background-image: url(${staff.photo})"></div>
        card.innerHTML = `
            <img src="${staff.photo}" alt="">
            <div class="staff-info">
                <div class="staff-id">NIK/NIG: ${staff.id}</div>
                <div class="staff-name">${staff.name}</div>
                <div class="staff-position">${staff.position}</div>
                <div class="staff-contact">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i> ${staff.phone}
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i> ${staff.email}
                    </div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => openModal(staff));
        staffContainer.appendChild(card);
    });

    // Filter functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            document.querySelectorAll('.staff-card').forEach(card => {
                card.style.display = (filter === 'all' || card.classList.contains(filter)) 
                    ? 'flex' : 'none';
            });
        });
    });

    // Modal functions
    function openModal(staff) {
        document.getElementById('modalPhoto').style.backgroundImage = `url(${staff.photo})`;
        document.getElementById('modalName').textContent = staff.name;
        document.getElementById('modalPosition').textContent = staff.position;
        document.getElementById('modalNik').textContent = staff.id;
        document.getElementById('modalPhone').textContent = staff.phone;
        document.getElementById('modalEmail').textContent = staff.email;
        document.getElementById('modalBio').textContent = staff.bio;
        modal.style.display = 'block';
    }

    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});