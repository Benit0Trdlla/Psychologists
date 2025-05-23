"use client"

import "./CardsPsychologists.css"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

export default function CardsPsychologists() {
    return (
        <>
            {/* CARDS PSICOLOGOS */}
            <div className="container mt-lg-4 p-lg-0">
                <h1>
                    Nuestros psicólogos y psicoterapeutas
                </h1>
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="fs-6 fw-normal">
                            Comunidad de recomendados. Aquí encontrarás a un especialista al que querrás acudir sin dudas.
                        </p>
                    </div>
                    <div className="d-lg-block d-none">
                        <p className="text-success fw-semibold cursor-pointer">
                            TODOS LOS ESPECIALISTAS
                            <svg height="22" viewBox="0 0 32 32" width="22" className="mb-1" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M20.9405 15.0576C21.1905 15.3076 21.3309 15.6467 21.3309 16.0002C21.3309 16.3538 21.1905 16.6929 20.9405 16.9429L13.3979 24.4856C13.2749 24.6129 13.1277 24.7145 12.9651 24.7844C12.8024 24.8543 12.6274 24.891 12.4504 24.8926C12.2733 24.8941 12.0978 24.8604 11.9339 24.7933C11.7701 24.7263 11.6212 24.6273 11.496 24.5021C11.3708 24.3769 11.2718 24.228 11.2048 24.0642C11.1377 23.9003 11.104 23.7247 11.1055 23.5477C11.1071 23.3707 11.1438 23.1957 11.2137 23.033C11.2836 22.8704 11.3852 22.7232 11.5125 22.6002L18.1125 16.0002L11.5125 9.40024C11.2696 9.14877 11.1352 8.81197 11.1383 8.46237C11.1413 8.11278 11.2816 7.77836 11.5288 7.53115C11.776 7.28394 12.1104 7.14371 12.46 7.14068C12.8096 7.13764 13.1464 7.27203 13.3979 7.51491L20.9405 15.0576Z" fillRule="evenodd"></path>
                            </svg>
                        </p>
                    </div>
                </div>

                {/* CARDS */}
                <div className="mb-5 mx-0 container row gap-2 d-none d-xl-flex">
                    <div className="p-0 border border-secondary-subtle rounded-3 m-0 card-container-width">
                        {/* HEADER */}
                        <div className="header p-3 rounded-3 d-flex align-items-center justify-content-center gap-5 card-bg-color">
                            <img className="img-fluid card-bg-width-psychologists rounded-3 card-img" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <div>
                                <div>
                                    <h5>Milton Peralta</h5>
                                    <p>
                                        Psicoterapia Integrativa
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <p className="p-0 mt-3 mb-0">EXAMPLE 2</p>
                                </div>
                            </div>
                        </div>
                        {/* ETIQUETAS */}
                        <div className="card-tags-container">
                            <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                <p className="p-0 m-0">Dificultades en relaciones</p>
                            </div>
                            <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                <p className="p-0 m-0">Dificultades en relaciones</p>
                            </div>
                            <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                <p className="p-0 m-0">Dificultades en relaciones</p>
                            </div>
                        </div>
                        {/* TARIFAS */}
                        <div className="px-3 py-3">
                            <p className="fs-5 fw-normal">
                                Terapia individual : <span className="fw-bold fs-6">$20.00</span>
                            </p>
                            <p className="fs-5 fw-normal">
                                Terapia de pareja: <span className="fw-bold fs-6">$20.00</span>
                            </p>
                        </div>
                        {/* INFORMACION */}
                        <div className="bg-secondary-subtle p-3 d-flex align-items-center justify-content-center">
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                    </svg>
                                    <span>Certificados: 2</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                    </svg>
                                    <span>Reseñas: 0</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                    </svg>
                                    <span>Recomendaciones: 0</span>
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-2 mb-5">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                    </svg>
                                    <span>En linea</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    <span>Presencial: Rosario</span>
                                </div>
                            </div>
                        </div>

                        {/* MAS INFO  */}
                        <div className="bg-success text-white p-3 text-center rounded-bottom">
                            <a href="#" className="link-offset-2 link-underline link-underline-opacity-0 text-white fw-semibold fs-5">
                                Más sobre el psicólogo
                            </a>
                        </div>
                    </div>

                    <div className="p-0 border border-secondary-subtle rounded-3 m-0 card-container-width">
                        {/* HEADER */}
                        <div className="header p-3 rounded-3 d-flex align-items-center justify-content-center gap-5 card-bg-color">
                            <img className="img-fluid card-bg-width-psychologists rounded-3 card-img" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <div>
                                <div>
                                    <h5>Milton Peralta</h5>
                                    <p>
                                        Psicoterapia Integrativa
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <p className="p-0 mt-3 mb-0">EXAMPLE 2</p>
                                </div>
                            </div>
                        </div>
                        {/* ETIQUETAS */}
                        <div className="card-tags-container">
                            <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                <p className="p-0 m-0">Dificultades en relaciones</p>
                            </div>
                            <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                <p className="p-0 m-0">Dificultades en relaciones</p>
                            </div>
                            <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                <p className="p-0 m-0">Dificultades en relaciones</p>
                            </div>
                        </div>
                        {/* TARIFAS */}
                        <div className="px-3 py-3">
                            <p className="fs-5 fw-normal">
                                Terapia individual : <span className="fw-bold fs-6">$20.00</span>
                            </p>
                            <p className="fs-5 fw-normal">
                                Terapia de pareja: <span className="fw-bold fs-6">$20.00</span>
                            </p>
                        </div>
                        {/* INFORMACION */}
                        <div className="bg-secondary-subtle p-3 d-flex align-items-center justify-content-center">
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                    </svg>
                                    <span>Certificados: 2</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                    </svg>
                                    <span>Reseñas: 0</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                    </svg>
                                    <span>Recomendaciones: 0</span>
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-2 mb-5">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                    </svg>
                                    <span>En linea</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    <span>Presencial: Rosario</span>
                                </div>
                            </div>
                        </div>

                        {/* MAS INFO  */}
                        <div className="bg-success text-white p-3 text-center rounded-bottom">
                            <a href="#" className="link-offset-2 link-underline link-underline-opacity-0 text-white fw-semibold fs-5">
                                Más sobre el psicólogo
                            </a>
                        </div>
                    </div>

                    <div className="p-0 border border-secondary-subtle rounded-3 m-0 card-container-width">
                        {/* HEADER */}
                        <div className="header p-3 rounded-3 d-flex align-items-center justify-content-center gap-5 card-bg-color">
                            <img className="img-fluid card-bg-width-psychologists rounded-3 card-img" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                            <div>
                                <div>
                                    <h5>Milton Peralta</h5>
                                    <p>
                                        Psicoterapia Integrativa
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <p className="p-0 mt-3 mb-0">EXAMPLE 2</p>
                                </div>
                            </div>
                        </div>
                        {/* ETIQUETAS */}
                        <div className="card-tags-container">
                            <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                <p className="p-0 m-0">Dificultades en relaciones</p>
                            </div>
                            <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                <p className="p-0 m-0">Dificultades en relaciones</p>
                            </div>
                            <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                <p className="p-0 m-0">Dificultades en relaciones</p>
                            </div>
                        </div>
                        {/* TARIFAS */}
                        <div className="px-3 py-3">
                            <p className="fs-5 fw-normal">
                                Terapia individual : <span className="fw-bold fs-6">$20.00</span>
                            </p>
                            <p className="fs-5 fw-normal">
                                Terapia de pareja: <span className="fw-bold fs-6">$20.00</span>
                            </p>
                        </div>
                        {/* INFORMACION */}
                        <div className="bg-secondary-subtle p-3 d-flex align-items-center justify-content-center">
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                    </svg>
                                    <span>Certificados: 2</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                    </svg>
                                    <span>Reseñas: 0</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                    </svg>
                                    <span>Recomendaciones: 0</span>
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-2 mb-5">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                    </svg>
                                    <span>En linea</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    <span>Presencial: Rosario</span>
                                </div>
                            </div>
                        </div>

                        {/* MAS INFO  */}
                        <div className="bg-success text-white p-3 text-center rounded-bottom">
                            <a href="#" className="link-offset-2 link-underline link-underline-opacity-0 text-white fw-semibold fs-5">
                                Más sobre el psicólogo
                            </a>
                        </div>
                    </div>
                </div>

                <Swiper
                    className="d-xl-none d-lg-flex"
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },

                        992: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },

                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                >
                    <SwiperSlide>
                        <div className="p-0 border border-secondary-subtle rounded-3 m-0 card-container-width">
                            {/* HEADER */}
                            <div className="header p-3 rounded-3 d-flex align-items-center justify-content-center gap-5 card-bg-color">
                                <img className="img-fluid card-bg-width-psychologists rounded-3 card-img" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                                <div>
                                    <div>
                                        <h5>Milton Peralta</h5>
                                        <p>
                                            Psicoterapia Integrativa
                                        </p>
                                    </div>
                                    <div className="mt-3">
                                        <p className="p-0 mt-3 mb-0">EXAMPLE 2</p>
                                    </div>
                                </div>
                            </div>
                            {/* ETIQUETAS */}
                            <div className="card-tags-container">
                                <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                    <p className="p-0 m-0">Dificultades en relaciones</p>
                                </div>
                                <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                    <p className="p-0 m-0">Dificultades en relaciones</p>
                                </div>
                                <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                    <p className="p-0 m-0">Dificultades en relaciones</p>
                                </div>
                            </div>
                            {/* TARIFAS */}
                            <div className="px-3 py-3">
                                <p className="fs-5 fw-normal">
                                    Terapia individual : <span className="fw-bold fs-6">$20.00</span>
                                </p>
                                <p className="fs-5 fw-normal">
                                    Terapia de pareja: <span className="fw-bold fs-6">$20.00</span>
                                </p>
                            </div>
                            {/* INFORMACION */}
                            <div className="bg-secondary-subtle p-3 d-flex align-items-center justify-content-center">
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                        </svg>
                                        <span>Certificados: 2</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <span>Reseñas: 0</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                        </svg>
                                        <span>Recomendaciones: 0</span>
                                    </div>
                                </div>

                                <div className="d-flex flex-column gap-2 mb-5">
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                        </svg>
                                        <span>En linea</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg>
                                        <span>Presencial: Rosario</span>
                                    </div>
                                </div>
                            </div>

                            {/* MAS INFO  */}
                            <div className="bg-success text-white p-3 text-center rounded-bottom">
                                <a href="#" className="link-offset-2 link-underline link-underline-opacity-0 text-white fw-semibold fs-5">
                                    Más sobre el psicólogo
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-0 border border-secondary-subtle rounded-3 m-0 card-container-width">
                            {/* HEADER */}
                            <div className="header p-3 rounded-3 d-flex align-items-center justify-content-center gap-5 card-bg-color">
                                <img className="img-fluid card-bg-width-psychologists rounded-3 card-img" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                                <div>
                                    <div>
                                        <h5>Milton Peralta</h5>
                                        <p>
                                            Psicoterapia Integrativa
                                        </p>
                                    </div>
                                    <div className="mt-3">
                                        <p className="p-0 mt-3 mb-0">EXAMPLE 2</p>
                                    </div>
                                </div>
                            </div>
                            {/* ETIQUETAS */}
                            <div className="card-tags-container">
                                <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                    <p className="p-0 m-0">Dificultades en relaciones</p>
                                </div>
                                <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                    <p className="p-0 m-0">Dificultades en relaciones</p>
                                </div>
                                <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                    <p className="p-0 m-0">Dificultades en relaciones</p>
                                </div>
                            </div>
                            {/* TARIFAS */}
                            <div className="px-3 py-3">
                                <p className="fs-5 fw-normal">
                                    Terapia individual : <span className="fw-bold fs-6">$20.00</span>
                                </p>
                                <p className="fs-5 fw-normal">
                                    Terapia de pareja: <span className="fw-bold fs-6">$20.00</span>
                                </p>
                            </div>
                            {/* INFORMACION */}
                            <div className="bg-secondary-subtle p-3 d-flex align-items-center justify-content-center">
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                        </svg>
                                        <span>Certificados: 2</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <span>Reseñas: 0</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                        </svg>
                                        <span>Recomendaciones: 0</span>
                                    </div>
                                </div>

                                <div className="d-flex flex-column gap-2 mb-5">
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                        </svg>
                                        <span>En linea</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg>
                                        <span>Presencial: Rosario</span>
                                    </div>
                                </div>
                            </div>

                            {/* MAS INFO  */}
                            <div className="bg-success text-white p-3 text-center rounded-bottom">
                                <a href="#" className="link-offset-2 link-underline link-underline-opacity-0 text-white fw-semibold fs-5">
                                    Más sobre el psicólogo
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-0 border border-secondary-subtle rounded-3 m-0 card-container-width">
                            {/* HEADER */}
                            <div className="header p-3 rounded-3 d-flex align-items-center justify-content-center gap-5 card-bg-color">
                                <img className="img-fluid card-bg-width-psychologists rounded-3 card-img" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                                <div>
                                    <div>
                                        <h5>Milton Peralta</h5>
                                        <p>
                                            Psicoterapia Integrativa
                                        </p>
                                    </div>
                                    <div className="mt-3">
                                        <p className="p-0 mt-3 mb-0">EXAMPLE 2</p>
                                    </div>
                                </div>
                            </div>
                            {/* ETIQUETAS */}
                            <div className="card-tags-container">
                                <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                    <p className="p-0 m-0">Dificultades en relaciones</p>
                                </div>
                                <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                    <p className="p-0 m-0">Dificultades en relaciones</p>
                                </div>
                                <div className="ms-3 mt-3 mb-1 rounded-5 d-inline-block px-3 py-1 text-center card-tags-bg-color">
                                    <p className="p-0 m-0">Dificultades en relaciones</p>
                                </div>
                            </div>
                            {/* TARIFAS */}
                            <div className="px-3 py-3">
                                <p className="fs-5 fw-normal">
                                    Terapia individual : <span className="fw-bold fs-6">$20.00</span>
                                </p>
                                <p className="fs-5 fw-normal">
                                    Terapia de pareja: <span className="fw-bold fs-6">$20.00</span>
                                </p>
                            </div>
                            {/* INFORMACION */}
                            <div className="bg-secondary-subtle p-3 d-flex align-items-center justify-content-center">
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                        </svg>
                                        <span>Certificados: 2</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <span>Reseñas: 0</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                        </svg>
                                        <span>Recomendaciones: 0</span>
                                    </div>
                                </div>

                                <div className="d-flex flex-column gap-2 mb-5">
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                        </svg>
                                        <span>En linea</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg>
                                        <span>Presencial: Rosario</span>
                                    </div>
                                </div>
                            </div>

                            {/* MAS INFO  */}
                            <div className="bg-success text-white p-3 text-center rounded-bottom">
                                <a href="#" className="link-offset-2 link-underline link-underline-opacity-0 text-white fw-semibold fs-5">
                                    Más sobre el psicólogo
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-pagination myClass-pagination"></div>
                </Swiper>

                <div className="d-lg-none d-block text-center">
                    <p className="text-success fw-semibold fs-2">
                        TODOS LOS ESPECIALISTAS
                        <svg height="30" viewBox="0 0 32 32" width="30" className="mb-2" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M20.9405 15.0576C21.1905 15.3076 21.3309 15.6467 21.3309 16.0002C21.3309 16.3538 21.1905 16.6929 20.9405 16.9429L13.3979 24.4856C13.2749 24.6129 13.1277 24.7145 12.9651 24.7844C12.8024 24.8543 12.6274 24.891 12.4504 24.8926C12.2733 24.8941 12.0978 24.8604 11.9339 24.7933C11.7701 24.7263 11.6212 24.6273 11.496 24.5021C11.3708 24.3769 11.2718 24.228 11.2048 24.0642C11.1377 23.9003 11.104 23.7247 11.1055 23.5477C11.1071 23.3707 11.1438 23.1957 11.2137 23.033C11.2836 22.8704 11.3852 22.7232 11.5125 22.6002L18.1125 16.0002L11.5125 9.40024C11.2696 9.14877 11.1352 8.81197 11.1383 8.46237C11.1413 8.11278 11.2816 7.77836 11.5288 7.53115C11.776 7.28394 12.1104 7.14371 12.46 7.14068C12.8096 7.13764 13.1464 7.27203 13.3979 7.51491L20.9405 15.0576Z" fillRule="evenodd"></path>
                        </svg>
                    </p>
                </div>
            </div>
        </>
    )
}