import React from 'react';
import '../styles/Testimonials.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'; // Use this for Swiper v9+ (swiper@^9.0.0)

import 'swiper/css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Priya, Student',
    message: 'Rutuja explains complex concepts with such ease. Best trainer ever!',
  },
  {
    name: 'Ankit, Developer',
    message: 'Her AWS demos were crystal clear. I understood IAM in 30 mins!',
  },
  {
    name: 'Sonal, Intern',
    message: 'Cybersecurity sessions with Rutuja made me rethink my career path.',
  },
  {
    name: 'Karan, Bootcamp Trainee',
    message: 'She doesn’t just teach code, she inspires confidence!',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section text-white">
      <div className="container text-center">
        <h2 className="section-title">Testimonials</h2>

        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // ✅ for desktops
          }}
          grabCursor={true}
        >


          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p>"{t.message}"</p>
                <h6>— {t.name}</h6>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
