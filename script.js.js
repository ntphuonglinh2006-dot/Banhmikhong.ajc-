// Cập nhật chuẩn dữ liệu theo bộ ảnh "Bánh mì không?" của bạn
const breadData = {
    hanoi: {
        title: "Bánh Mì Dân Tổ (TP. Hà Nội)",
        desc: "Đặc trưng với phần nhân hòa quyện béo ngậy được chế biến từ trứng, pate, hành phi nấu sền sệt, tạo nên hương vị độc đáo thu hút thực khách Hà Thành về đêm.",
        img: "hanoi.jpg" // Gọi file ảnh cục bộ cùng thư mục
    },
    haiphong: {
        title: "Bánh Mì Que (TP. Hải Phòng)",
        desc: "Nổi tiếng với hình dáng nhỏ gọn như một chiếc que, kết hợp hoàn hảo giữa vị béo ngậy của pate Cột Đèn truyền thống và vị cay nồng nàn đặc trưng từ tương ớt chí chương.",
        img: "haiphong.jpg"
    },
    hue: {
        title: "Bánh Mì Huế (TP. Thừa Thiên Huế)",
        desc: "Mang đậm hương vị miền Trung khó trộn lẫn nhờ sự kết hợp hài hòa giữa thịt quay giòn rụm, vị béo thơm của pate cùng hậu vị cay nồng quyến rũ từ nước sốt ớt xào gia truyền.",
        img: "hue.jpg"
    },
    hoian: {
        title: "Bánh Mì Hội An (TP. Hội An)",
        desc: "Món ăn nức tiếng thế giới được làm nên từ sự tỉ mỉ trong từng lát thịt xá xíu đậm đà, lạp xưởng thơm lừng cùng lớp pate béo mịn bên trong ổ bánh mì nướng giòn rụm.",
        img: "hoian.jpg"
    },
    saigon: {
        title: "Bánh Mì Sài Gòn (TP. Hồ Chí Minh)",
        desc: "Ổ bánh mì đầy đặn đại diện cho sự phong phú ẩm thực miền Nam, hòa quyện giữa các lớp chả lụa dày, pate thơm phức và vị béo đặc trưng của sốt bơ dầu trứng tự làm.",
        img: "saigon.jpg"
    }
};

window.addEventListener('DOMContentLoaded', () => {
    gsap.from("#vietnam-map", { opacity: 0, scale: 0.9, duration: 1, ease: "power2.out" });
    gsap.from(".pin", { 
        opacity: 0, 
        y: -50, 
        duration: 0.6, 
        stagger: 0.15, 
        ease: "bounce.out",
        delay: 0.5 
    });
});

const pins = document.querySelectorAll('.pin');
const infoPanel = document.getElementById('info-panel');
const mapSection = document.querySelector('.map-section');

pins.forEach(pin => {
    pin.addEventListener('click', () => {
        const province = pin.getAttribute('data-province');
        const data = breadData[province];

        if (data) {
            document.getElementById('food-title').innerText = data.title;
            document.getElementById('food-desc').innerText = data.desc;
            document.getElementById('food-img').src = data.img;

            gsap.to(mapSection, { x: "-15%", duration: 0.5, ease: "power2.out" });
            gsap.to(infoPanel, { right: "0%", duration: 0.5, ease: "power2.out" });

            gsap.fromTo("#food-img", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, delay: 0.2 });
            gsap.fromTo([ "#food-title", "#food-desc" ], 
                { opacity: 0, y: 15 }, 
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, delay: 0.3 }
            );
        }
    });
});

document.getElementById('close-panel').addEventListener('click', () => {
    gsap.to(mapSection, { x: "0%", duration: 0.5, ease: "power2.inOut" });
    gsap.to(infoPanel, { right: "-50%", duration: 0.5, ease: "power2.inOut" });
});