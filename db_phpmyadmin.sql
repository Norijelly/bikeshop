CREATE TABLE `categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'sepeda_balap'),
(2, 'sepeda_gunung'),
(3, 'sepeda_lipat'),
(4, 'sepeda_listrik');

CREATE TABLE `product_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `product_type` (`id`, `name`) VALUES
(1, 'best_seller'),
(2, 'new_product'),
(3, 'promo');

CREATE TABLE `product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `category_id` INT NOT NULL,
  `type_id` INT NOT NULL,
  `price` DECIMAL(20,6) NOT NULL,
 `image` varchar(300) NOT NULL,
  `description` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category` (`category_id`),
  KEY `fk_type` (`type_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_type` FOREIGN KEY (`type_id`) REFERENCES `product_type` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `product` (`id`, `name`, `category_id`, `type_id`, `price`, `image`, `description`) VALUES
	(1, 'POLYGON CASCADE 3', 2, 1, 3150000.000000, 'sepeda gunung 2.webp', 'Polygon Sepeda Gunung Cascade 3 dirancang dengan geometri modern, rangka ringan, dan ban lebar, cocok untuk medan off-road.'),
	(2, 'POLYGON KALOSI LANES EVO MID STEP 2022', 4, 1, 21500000.000000, 'sepeda listrik 2.webp', 'Hadirnya Polygon Sepeda E-Bike Urban Kalosi Lanes Evo, dengan mudah membawa Anda dari tempat A ke tempat B, membawa Anda untuk beraktifitas lebih cepat dan mudah mengatur pernafasan pada saat bersepeda. Sepeda perkotaan ini dilengkapi dengan fork suspensi untuk memberikan pengalaman bersepeda yang mulus dan melaju lebih cepat dengan sistem bantuan pedal terbaru kami, sehingga Anda akan merasakan kenyamanannya.'),
	(3, 'POLYGON STRATTOS SPORT S2', 1, 1, 6400000.000000, 'sepeda balap.webp', 'Strattos S2 hadir dengan frame baru Light Blue dan drivetrain Shimano Claris ST-R2000 2x8 kecepatan.'),
	(4, 'POLYGON PREMIER 5', 2, 1, 4950000.000000, 'sepeda gunung 3.webp', 'Sepeda Polygon Premier 5 tahun 2022 ini adalah seri terbaru dari seri sepeda Premier 5. Dibuat untuk menjadi sepeda serbaguna bagi Anda pengendara yang mencari sepeda untuk pergi berkendara di akhir pekan. Sepeda Gunung Premier 5 menggabungkan fitur urban yang cocok untuk kenyamanan bersepeda di jalanan perkotaan dan ketahanan sepeda gunung di medan offroad ringan. Seri Polygon Premier 5 ini akan membuat kamu lebih nyaman dan antusias bersepeda setiap harinya. Polygon Premier 5 dirancang dapat melibas banyak medan.'),
	(5, 'MARIN FAIRFAX', 4, 1, 19000000.000000, 'sepeda listrik 3.webp', 'Fairfax terlaris dan mendapat banyak pujian dari kritikus kini hadir dengan tenaga listrik. Marin Sepeda Elektrik Fairfax yang serba baru bersama torsi 40 Nm dari hub belakang, yang secara senyap dan mulus menambah tenaga pada kayuhan Anda. Baterai 340 Wh terintegrasi dengan rapi ke dalam downtube Series 2 aluminum frame, sementara Shimano 8-speed Altus drivetrain. Dilengkapi, hydraulic disc brakes dari Tektro memungkinkan daya henti yang terkendali dan nyaman dalam segala kondisi.'),
	(6, 'POLYGON HELIOS A7X', 1, 1, 45000000.000000, 'sepeda balap 2.webp', 'Sepeda Balap (road bike) dengan material Carbon standar UCI yang ringan siap menemani diperjalanan Anda. Tidak menghalangi Anda dari hambatan udara yang menakutkan hingga permukaan jalan yang kasar, meminimalkan interaksi dengan lingkungan sekitar dengan harapan mencapai efisiensi yang optimal.'),
	(7, 'TERN VERGE D9', 3, 1, 6800000.000000, 'sepeda lipat 5.png', 'Lahir dari filosofi desain 451 Verge, sepeda memiliki roda balap yang lebih besar dan geometri T-Tuned. Sepeda lipat ini termasuk ke dalam kategori sepeda urban performance. Tern Verge D9 sangat baik untuk perjalanan harian atau bersepeda dengan cepat dan efisien. Memakai komponen premium dan desain geometri rangka yang mutakhir, sepeda lipat Tern Verge D9 ini adalah sepeda lipat yang mengoptimalkan perjalanan berkendara Anda baik panjang atau pendek.'),
	(8, 'POLYGON URBANO 3 HITAM', 3, 2, 4400000.000000, 'sepeda lipat.png', 'Polygon Sepeda Lipat Urbano 3 mudah disimpan dan dibawa kemana saja, cocok untuk ruang terbatas dan transportasi umum.'),
	(9, 'POLYGON GILI MIXTE', 4, 2, 12800000.000000, 'sepeda listrik.png', 'Polygon Gili Mixte punya 5 mode power assist dan kecepatan hingga 25 km/jam. Ramah lingkungan dan efisien untuk jarak jauh.'),
	(10, 'POLYGON STRATTOS 4', 1, 2, 10600000.000000, 'sepeda balap 3.webp', 'Sambut era baru pengalaman bersepeda Anda dengan Polygon Strattos S4, sepeda balap terbaru yang dirancang untuk memberikan performa maksimal di setiap perjalanan. Dibangun dengan teknologi tinggi dan material berkualitas, Strattos S4 menawarkan kombinasi sempurna antara kekuatan, kestabilan, dan kenyamanan.'),
	(11, 'POLYGON URBANO 5 BIRU', 3, 2, 4400000.000000, 'sepeda lipat 2.png', 'Telah hadir Polygon Urbano 5 yang dibuat untuk pengendara yang mendambakan petualangan tanpa akhir! Mulai dari bepergian di tempat dengan lalu lintas tinggi, maupun bersepeda santai sambil menikmati wahana rekreasi, segalanya mungkin bisa dilakukan bersama Polygon Urbano 5. Sepeda yang ideal untuk komuter perkotaan, tentunya mudah dibawa kemanapun dan tidak memakan banyak tempat untuk menyimpan sepeda di ruang yang terbatas.'),
	(12, 'POLYGON MONARCH 5', 2, 2, 2500000.000000, 'sepeda gunung.webp', 'Ada kegembiraan tersendiri ketika Rider ingin mempersembahkan sepeda gunung pertama untuk putra dan putri Rider. Kesempatan menikmati alam bersama sambil bersepeda merupakan salah satu momen bonding keluarga yang paling berharga.'),
	(13, 'POLYGON STRATTOS S3', 1, 2, 7800000.000000, 'sepeda balap 4.webp', 'Polygon Strattos S3 Road Bike adalah pilihan sempurna bagi Anda yang mencari sepeda balap dengan kombinasi sempurna antara kecepatan, kenyamanan, dan performa. Dirancang untuk para pehobi dan pembalap yang menginginkan pengalaman bersepeda terbaik, Strattos S3 menawarkan teknologi terkini dan kualitas tanpa kompromi.'),
	(14, 'POLYGON GILI MIXTE', 4, 2, 17300000.000000, 'sepeda listrik 5.webp', 'Kalosi Miles adalah e-bike hybrid yang memadukan daya tahan, kenyamanan, dan efisiensi untuk bersepeda lebih lama, lebih cepat, dan lebih nyaman di medan perkotaan serta medan yang tidak rata atau semi-off-road. Memberikan kenyamanan ekstra sehingga kamu dapat menikmati perjalanan untuk waktu yang lama dan membawamu jauh dari rumah.'),
	(15, 'WIMCYCLE POCKET ROCKET X3', 3, 3, 12800000.000000, 'sepeda lipat 3.png', 'POCKET ROCKET X3 sepeda yang ideal untuk komuter di perkotaan dan yang tidak memiliki banyak ruang untuk menyimpan sepeda. Dibuat dengan frame alloy yang lebih nyaman dan kuat. Dilengkapi dengan roda berukuran 20″ dan  9-speed dengan hidraulic disc brake membuat Pocket Rocket sangat cocok untuk Anda yang ingin menjelajahi perumahan, perkotaan dengan posisi berkendara yang lebih tegak dengan kenyamanan yang maksimal dilengkapi dengan front block untuk memudahkan mobilitas keseharian Anda.'),
	(16, 'POLYGON SYNCLINE C3', 2, 3, 16500000.000000, 'sepeda gunung 4.webp', 'Berkendara seru dengan sepeda gunung Cross-Country (XC) handal Polygon Syncline C3! Drivetrain single dengan 12 pilihan kecepatan, Fork Rockshox Recon Silver RL 120mm, dan Frame ACX Carbon, Polygon Sepeda Gunung Syncline C3 di desain sebagai sepeda Hardtail XC dengan kinerja maksimal yang siap menaklukkan segala trek.'),
	(17, 'TERN VERGE X11', 3, 3, 22500000.000000, 'sepeda lipat 4.png', 'Tern Verge X11 adalah salah satu sepeda lipat keluaran Tern. Dengan finishing desain matte, Tern Verge X11 sangat ringan, kuat dan gesit saat digunakan berkendara. Berakselerasi dengan baik, sepeda Tern Verge X11 ini dapat meluncur lebih cepat dari yang Anda harapkan dari sebuah folder. Tern Verge X11 akan sangat menyenangkan untuk Anda kendarai untuk perjalanan yang cukup jauh. Didesain dengan warna dan tampilan yang catchy menjadikan tampilan Tern Verge X11 yang “on point” saat Anda kendarai.'),
	(18, 'POLYGON SISKIU HE WHITE WITH SHIMANO', 4, 3, 44000000.000000, 'sepeda listrik 4.webp', 'Polygon Sepeda Elektrik Siskiu HE White with Shimano adalah pilihan tepat bagi Anda yang mencari sepeda urban MTB listrik yang bertenaga, tangguh, dan nyaman untuk berpetualang. Inovasi terbaru dari Polygon, menjadikan Polygon Sepeda Elektrik Siskiu HE White with Shimano dapat diandalkan pada semua jenis medan, trek off-road maupun perkotaan dengan mengkombinasikan aspek kenyamanan dan sporty.'),
	(19, 'POLYGON XTRADA 7', 2, 3, 10600000.000000, 'sepeda gunung 5.webp', 'Memiliki sepeda gunung dengan spesifikasi unggul, andal, dan mumpuni namun tetap berkelas tentu menjadi dambaan siapa pun. Betapa tidak, kemampuan seperti itu selain akan menunjang pengalaman berharga dalam bersepeda, juga mampu menjadikan aktivitas bersepeda menjadi luar biasa. Jangan khawatir, keunggulan seperti itu bisa kamu peroleh secara mudah pada Polygon Sepeda Gunung Xtrada 7. Tampilannya yang memesona ditunjang dengan berbagai fitur yang berkelas akan membantumu melalui jarak demi jarak dengan pengalaman yang susah terlupakan.'),
	(20, 'POLYGON HELIOS A8X', 1, 3, 60000000.000000, 'sepeda balap 5.webp', 'Sepeda Balap (Road Bike) dengan material Carbon standar UCI yang ringan siap menemani diperjalanan Anda. Tidak menghalangi Anda dari hambatan udara yang menakutkan hingga permukaan jalan yang kasar, meminimalkan interaksi dengan lingkungan sekitar dengan harapan mencapai efisiensi yang optimal.');
