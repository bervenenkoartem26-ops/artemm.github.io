[code_artifact (1).html](https://github.com/user-attachments/files/32657161/code_artifact.1.html)
<!DOCTYPE html>
<html lang="ru" class="h-full bg-[#F8F5F0]">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consult+ | Экспресс-тест на налоговые риски бизнеса 2026</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        beige: {
                            50: '#FAF8F5',
                            100: '#F4EFEA',
                            200: '#E8E0D5',
                            300: '#D8C8B8',
                            400: '#C4B09C',
                            500: '#A6927D',
                            600: '#8A7562',
                        },
                        espresso: {
                            800: '#2C2520',
                            900: '#1A1614',
                            DEFAULT: '#231E1A',
                        },
                        warm: {
                            accent: '#8C6D58',
                            highlight: '#D4B89B',
                            dark: '#12100F',
                        }
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        serif: ['"Playfair Display"', 'serif'],
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom print styles */
        @media print {
            body { background: white !important; color: black !important; }
            .no-print { display: none !important; }
            .print-only { display: block !important; }
            .shadow-custom, .shadow-lg, .shadow-sm { box-shadow: none !important; border: 1px solid #ddd !important; }
        }
        
        /* Custom minimal scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #F4EFEA;
        }
        ::-webkit-scrollbar-thumb {
            background: #C4B09C;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #8A7562;
        }

        .fade-in {
            animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .option-card {
            transition: all 0.2s ease-in-out;
        }
        .option-card:hover {
            transform: translateY(-2px);
        }
    </style>
</head>
<body class="font-sans antialiased text-espresso-900 bg-[#F8F5F0] min-h-full flex flex-col justify-between selection:bg-beige-300 selection:text-espresso-900">

    <header class="border-b border-beige-200 bg-[#F8F5F0]/90 backdrop-blur-md sticky top-0 z-40 no-print">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <div class="flex items-center space-x-3 cursor-pointer" onclick="quizApp.restartQuiz()">
                <div class="w-10 h-10 rounded-xl bg-espresso-900 text-beige-100 flex items-center justify-center font-serif text-xl font-bold tracking-tight shadow-sm">
                    C+
                </div>
                <div>
                    <div class="flex items-center space-x-1.5">
                        <h1 class="text-base font-extrabold text-espresso-900 tracking-tight">Consult+</h1>
                        <span class="text-[10px] bg-warm-accent/15 text-warm-accent font-bold px-1.5 py-0.5 rounded uppercase">Tax & Legal</span>
                    </div>
                    <span class="text-xs font-medium text-beige-600 block">Налоговый консалтинг</span>
                </div>
            </div>
            
            <div class="flex items-center space-x-2 sm:space-x-3">
                <button onclick="quizApp.openContactModal()" class="text-xs font-semibold text-espresso-900 bg-beige-100 hover:bg-beige-200 border border-beige-300 px-3 py-2 rounded-xl transition flex items-center gap-1.5">
                    <i class="fa-regular fa-circle-question text-warm-accent"></i>
                    <span class="hidden sm:inline">Нужна помощь?</span>
                    <span class="sm:hidden">Помощь</span>
                </button>
                <a href="https://t.me/nalogconsultt" target="_blank" rel="noopener" class="text-xs font-bold text-white bg-espresso-900 hover:bg-espresso-800 px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm">
                    <i class="fa-brands fa-telegram text-warm-highlight text-sm"></i>
                    <span>Telegram</span>
                </a>
            </div>
        </div>
    </header>

    <main class="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">

        <!-- SCREEN 1: INTRO SCREEN -->
        <section id="intro-screen" class="fade-in max-w-2xl mx-auto text-center py-4">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-beige-200/70 border border-beige-300/70 text-xs font-semibold text-espresso-800 mb-6">
                <i class="fa-solid fa-shield-halved text-warm-accent"></i>
                <span>Экспресс-аудит от экспертов Consult+</span>
            </div>

            <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-espresso-900 leading-tight mb-6">
                Насколько ваш бизнес защищен от проверок ФНС?
            </h2>

            <p class="text-base sm:text-lg text-beige-600 leading-relaxed mb-8 max-w-xl mx-auto">
                Пройдите интерактивный тест из 10 вопросов, разработанный налоговыми консультантами <strong class="text-espresso-900 font-semibold">Consult+</strong>. Оцените вероятность выездной проверки, блокировки счетов и риска доначислений по ст. 54.1 НК РФ.
            </p>

            <!-- Key Metric Cards -->
            <div class="grid grid-cols-3 gap-3 sm:gap-4 mb-10 text-left">
                <div class="bg-white p-4 rounded-xl border border-beige-200 shadow-sm">
                    <div class="text-warm-accent text-lg mb-1"><i class="fa-regular fa-clock"></i></div>
                    <div class="text-xl font-bold text-espresso-900">3 мин</div>
                    <div class="text-xs text-beige-600">Время экспресс-теста</div>
                </div>
                <div class="bg-white p-4 rounded-xl border border-beige-200 shadow-sm">
                    <div class="text-warm-accent text-lg mb-1"><i class="fa-solid fa-list-check"></i></div>
                    <div class="text-xl font-bold text-espresso-900">10 факторов</div>
                    <div class="text-xs text-beige-600">Критерии рисков ФНС</div>
                </div>
                <div class="bg-white p-4 rounded-xl border border-beige-200 shadow-sm">
                    <div class="text-warm-accent text-lg mb-1"><i class="fa-solid fa-user-secret"></i></div>
                    <div class="text-xl font-bold text-espresso-900">100%</div>
                    <div class="text-xs text-beige-600">Анонимно и без ИНН</div>
                </div>
            </div>

            <div class="space-y-4">
                <button onclick="quizApp.startQuiz()" class="w-full sm:w-auto px-8 py-4 bg-espresso-900 hover:bg-espresso-800 text-beige-50 font-medium rounded-xl transition duration-200 shadow-md flex items-center justify-center space-x-3 mx-auto group">
                    <span>Пройти аудит рисков</span>
                    <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </button>
                <button onclick="quizApp.openPrivacyModal()" class="text-xs text-beige-500 hover:text-espresso-900 transition flex items-center justify-center gap-1.5 mx-auto cursor-pointer">
                    <i class="fa-solid fa-shield-halved text-[10px]"></i> О безопасности и анонимности теста
                </button>
            </div>
        </section>

        <!-- SCREEN 2: QUIZ SCREEN -->
        <section id="quiz-screen" class="hidden fade-in max-w-2xl mx-auto">
            
            <!-- Progress Bar & Counter Header -->
            <div class="mb-8">
                <div class="flex justify-between items-center mb-3 text-xs font-semibold tracking-wider text-beige-600 uppercase">
                    <span id="question-category" class="text-warm-accent">Категория</span>
                    <span>Вопрос <span id="current-step" class="text-espresso-900 font-bold">1</span> из 10</span>
                </div>
                <div class="w-full h-2 bg-beige-200 rounded-full overflow-hidden">
                    <div id="progress-bar" class="h-full bg-espresso-900 transition-all duration-300 ease-out" style="width: 10%"></div>
                </div>
            </div>

            <!-- Question Card Container -->
            <div class="bg-white p-6 sm:p-8 rounded-2xl border border-beige-200 shadow-sm mb-6">
                <!-- Question Title -->
                <h3 id="question-title" class="font-serif text-xl sm:text-2xl font-semibold text-espresso-900 mb-3 leading-snug">
                    Загрузка вопроса...
                </h3>
                
                <!-- Helpful Hint -->
                <p id="question-hint" class="text-xs sm:text-sm text-beige-600 mb-6 bg-beige-50 p-3 rounded-lg border-l-2 border-warm-accent italic">
                    Подсказка к вопросу
                </p>

                <!-- Options List -->
                <div id="options-container" class="space-y-3">
                    <!-- Dynamic Options Inserted Here -->
                </div>
            </div>

            <!-- Navigation Controls -->
            <div class="flex items-center justify-between pt-2">
                <button id="prev-btn" onclick="quizApp.prevQuestion()" class="px-5 py-2.5 rounded-xl border border-beige-300 text-espresso-900 text-sm font-medium hover:bg-beige-100 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center space-x-2">
                    <i class="fa-solid fa-chevron-left text-xs"></i>
                    <span>Назад</span>
                </button>

                <div class="text-xs text-beige-500 font-medium">
                    Выберите 1 вариант
                </div>

                <button id="next-btn" onclick="quizApp.nextQuestion()" disabled class="px-6 py-2.5 rounded-xl bg-espresso-900 text-beige-50 text-sm font-medium hover:bg-espresso-800 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center space-x-2 shadow-sm">
                    <span id="next-btn-text">Далее</span>
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                </button>
            </div>
        </section>

        <!-- SCREEN 3: RESULTS SCREEN -->
        <section id="results-screen" class="hidden fade-in max-w-3xl mx-auto">
            
            <!-- Result Summary Top Box -->
            <div class="bg-white p-6 sm:p-10 rounded-2xl border border-beige-200 shadow-sm mb-8 text-center relative overflow-hidden">
                <div class="absolute -top-12 -right-12 w-40 h-40 bg-beige-100 rounded-full blur-2xl pointer-events-none"></div>

                <div class="inline-block px-3 py-1 rounded-full bg-beige-100 border border-beige-200 text-xs font-semibold text-beige-600 mb-4 uppercase tracking-wider">
                    Результат аудита Consult+
                </div>

                <!-- Risk Score Gauge / Dial Display -->
                <div class="relative w-40 h-40 mx-auto my-4 flex items-center justify-center">
                    <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <!-- Background Circle -->
                        <path class="text-beige-200" stroke-width="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <!-- Progress Circle -->
                        <path id="score-circle" class="text-espresso-900 transition-all duration-1000 ease-out" stroke-dasharray="0, 100" stroke-width="3.2" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div class="absolute flex flex-col items-center justify-center">
                        <span id="risk-score-percent" class="text-3xl font-extrabold text-espresso-900 font-sans">0%</span>
                        <span class="text-[10px] uppercase font-bold tracking-widest text-beige-500">Индекс риска</span>
                    </div>
                </div>

                <h3 id="risk-level-title" class="font-serif text-2xl sm:text-3xl font-bold text-espresso-900 mb-2">
                    Анализ завершен
                </h3>

                <p id="risk-level-description" class="text-sm sm:text-base text-beige-600 max-w-xl mx-auto mb-6 leading-relaxed">
                    На основе ваших ответов подготовлена индивидуальная оценка рисков и рекомендации по оптимизации.
                </p>

                <div id="risk-badge" class="inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-sm">
                    <!-- Dynamic Badge -->
                </div>
            </div>

            <!-- Detailed Breakdown & Action Plan -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                
                <!-- Main Breakdown -->
                <div class="md:col-span-2 space-y-6">
                    <!-- General Recommendations Card -->
                    <div class="bg-espresso-900 text-beige-50 p-6 sm:p-8 rounded-2xl shadow-md border border-warm-accent/30 relative overflow-hidden">
                        <div class="flex items-center space-x-3 mb-4">
                            <span class="w-8 h-8 rounded-lg bg-warm-accent text-white flex items-center justify-center text-sm font-bold">
                                <i class="fa-solid fa-shield-halved"></i>
                            </span>
                            <div>
                                <h4 class="font-serif text-lg sm:text-xl font-bold text-white">Рекомендации налогового консультанта Consult+</h4>
                                <p class="text-[11px] text-beige-300">Правовой алгоритм снижения налоговых рисков в 2026 году</p>
                            </div>
                        </div>

                        <div class="text-xs sm:text-sm text-beige-200 leading-relaxed space-y-3 font-sans">
                            <p>• <strong>Регулярно обновляйте Досье должной осмотрительности</strong> по ключевым контрагентам (коммерческие предложения, штатная численность, материально-техническая база).</p>
                            <p>• <strong>Формируйте деловую цель</strong> по всем сделкам и внутригрупповым перераспределениям согласно ст. 54.1 НК РФ.</p>
                            <p>• <strong>Проверьте договоры ГПХ с самозанятыми</strong> на отсутствие признаков трудовых отношений (фиксированное время, постоянные оклады, рабочие места).</p>
                        </div>
                    </div>

                    <!-- Detected Vulnerabilities Card -->
                    <div class="bg-white p-6 rounded-2xl border border-beige-200 shadow-sm">
                        <h4 class="font-serif text-lg font-bold text-espresso-900 mb-4 flex items-center gap-2 border-b border-beige-100 pb-3">
                            <i class="fa-solid fa-triangle-exclamation text-warm-accent"></i>
                            <span>Выявленные зоны риска</span>
                        </h4>
                        <div id="vulnerabilities-list" class="space-y-3">
                            <!-- Dynamic Vulnerabilities -->
                        </div>
                    </div>
                </div>

                <!-- Action CTA Sidebar -->
                <div class="space-y-6">
                    <div class="bg-white p-6 rounded-2xl border border-beige-200 shadow-sm text-center">
                        <div class="w-12 h-12 rounded-2xl bg-espresso-900 text-beige-100 flex items-center justify-center mx-auto mb-4 font-serif text-xl font-bold">
                            C+
                        </div>
                        <h4 class="font-serif text-base font-bold text-espresso-900 mb-2">Консультация эксперта</h4>
                        <p class="text-xs text-beige-600 mb-6 leading-relaxed">
                            Наши налоговые консультанты помогут минимизировать выявленные риски и разработать правовую защиту.
                        </p>

                        <a href="https://t.me/nalogconsultt" target="_blank" rel="noopener" class="w-full py-3 px-4 bg-espresso-900 hover:bg-espresso-800 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 mb-3 shadow-md">
                            <i class="fa-brands fa-telegram text-warm-highlight text-sm"></i>
                            <span>Связаться в Telegram</span>
                        </a>

                        <a href="https://wa.me/79887373368?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B6%D1%83%20%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%82%D0%B5%D1%81%D1%82%20Consult%2B" target="_blank" rel="noopener" class="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 mb-3 shadow-sm">
                            <i class="fa-brands fa-whatsapp text-sm"></i>
                            <span>Написать в WhatsApp</span>
                        </a>

                        <a href="tel:+79887373368" class="w-full py-2.5 px-4 bg-beige-100 hover:bg-beige-200 text-espresso-900 text-xs font-bold rounded-xl border border-beige-300 transition flex items-center justify-center gap-2">
                            <i class="fa-solid fa-phone text-warm-accent"></i>
                            <span>+7 988 737 33 68</span>
                        </a>
                    </div>

                    <div class="bg-beige-100/60 p-5 rounded-2xl border border-beige-200 space-y-3">
                        <button onclick="quizApp.copyResultsToClipboard()" class="w-full py-2.5 bg-white hover:bg-beige-50 text-espresso-900 border border-beige-300 font-semibold text-xs rounded-xl transition flex items-center justify-center gap-2">
                            <i class="fa-regular fa-copy text-beige-600"></i>
                            <span>Скопировать отчет</span>
                        </button>
                        <button onclick="quizApp.restartQuiz()" class="w-full py-2.5 bg-transparent hover:bg-beige-200/50 text-beige-600 font-semibold text-xs rounded-xl transition flex items-center justify-center gap-2">
                            <i class="fa-solid fa-rotate-right"></i>
                            <span>Пройти тест заново</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- PRIVACY & SECURITY MODAL -->
    <div id="privacy-modal" class="fixed inset-0 bg-espresso-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden fade-in no-print">
        <div class="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-beige-200 relative">
            <button onclick="quizApp.closePrivacyModal()" class="absolute top-4 right-4 text-beige-400 hover:text-espresso-900 transition">
                <i class="fa-solid fa-xmark text-lg"></i>
            </button>
            
            <div class="flex items-center space-x-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-beige-100 text-espresso-900 flex items-center justify-center font-serif text-lg font-bold">
                    <i class="fa-solid fa-user-secret"></i>
                </div>
                <div>
                    <h3 class="font-serif text-lg font-bold text-espresso-900">Безопасность данных</h3>
                    <p class="text-xs text-beige-600">Ваша конфиденциальность — наш приоритет</p>
                </div>
            </div>

            <ul class="space-y-4 mb-6">
                <li class="flex items-start gap-3">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <p class="text-sm text-espresso-900 leading-snug"><strong>Абсолютная анонимность.</strong> Мы не просим указывать ИНН, название компании или ваши личные данные для прохождения теста.</p>
                </li>
                <li class="flex items-start gap-3">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <p class="text-sm text-espresso-900 leading-snug"><strong>Без передачи третьим лицам.</strong> Результаты обрабатываются локально на вашем устройстве, мы не сохраняем их на серверах и не передаем ФНС.</p>
                </li>
                <li class="flex items-start gap-3">
                    <i class="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                    <p class="text-sm text-espresso-900 leading-snug"><strong>Безопасная коммуникация.</strong> Только вы решаете, делиться ли отчетом с нашими консультантами в мессенджерах для дальнейшей работы.</p>
                </li>
            </ul>

            <button onclick="quizApp.closePrivacyModal()" class="w-full py-3 px-4 bg-espresso-900 hover:bg-espresso-800 text-beige-50 font-medium rounded-xl transition shadow-md">
                Понятно, закрыть
            </button>
        </div>
    </div>

    <!-- CONTACT & HELP MODAL -->
    <div id="contact-modal" class="fixed inset-0 bg-espresso-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden fade-in no-print">
        <div class="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-beige-200 relative">
            <button onclick="quizApp.closeContactModal()" class="absolute top-4 right-4 text-beige-400 hover:text-espresso-900 transition">
                <i class="fa-solid fa-xmark text-lg"></i>
            </button>
            
            <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-espresso-900 text-beige-100 flex items-center justify-center font-serif text-lg font-bold">
                    C+
                </div>
                <div>
                    <h3 class="font-serif text-lg font-bold text-espresso-900">Consult+ Помощь и Контакты</h3>
                    <p class="text-xs text-beige-600">Налоговый консалтинг и защита бизнеса</p>
                </div>
            </div>

            <p class="text-xs sm:text-sm text-beige-600 mb-6 leading-relaxed">
                Задайте вопрос или свяжитесь с нашим налоговым консультантом напрямую. Мы поможем минимизировать риски и подготовить правовую защиту.
            </p>

            <div class="space-y-3 mb-6">
                <a href="https://t.me/nalogconsultt" target="_blank" rel="noopener" class="flex items-center justify-between p-3.5 bg-beige-50 hover:bg-beige-100 rounded-xl border border-beige-200 transition group">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center">
                            <i class="fa-brands fa-telegram"></i>
                        </div>
                        <div class="text-left">
                            <div class="text-xs font-bold text-espresso-900">Telegram Консультант</div>
                            <div class="text-[11px] text-beige-600">@nalogconsultt</div>
                        </div>
                    </div>
                    <i class="fa-solid fa-chevron-right text-xs text-beige-400 group-hover:translate-x-1 transition-transform"></i>
                </a>

                <a href="https://wa.me/79887373368?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B6%D1%83%20%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%82%D0%B5%D1%81%D1%82%20Consult%2B" target="_blank" rel="noopener" class="flex items-center justify-between p-3.5 bg-beige-50 hover:bg-beige-100 rounded-xl border border-beige-200 transition group">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                            <i class="fa-brands fa-whatsapp text-sm"></i>
                        </div>
                        <div class="text-left">
                            <div class="text-xs font-bold text-espresso-900">WhatsApp Поддержка</div>
                            <div class="text-[11px] text-beige-600">+7 988 737 33 68</div>
                        </div>
                    </div>
                    <i class="fa-solid fa-chevron-right text-xs text-beige-400 group-hover:translate-x-1 transition-transform"></i>
                </a>

                <a href="tel:+79887373368" class="flex items-center justify-between p-3.5 bg-beige-50 hover:bg-beige-100 rounded-xl border border-beige-200 transition group">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 rounded-lg bg-espresso-900 text-beige-100 flex items-center justify-center">
                            <i class="fa-solid fa-phone text-xs"></i>
                        </div>
                        <div class="text-left">
                            <div class="text-xs font-bold text-espresso-900">Прямая линия Consult+</div>
                            <div class="text-[11px] text-beige-600">+7 988 737 33 68</div>
                        </div>
                    </div>
                    <i class="fa-solid fa-chevron-right text-xs text-beige-400 group-hover:translate-x-1 transition-transform"></i>
                </a>
            </div>

            <div class="bg-beige-100 p-3 rounded-xl text-[11px] text-beige-600 text-center">
                <i class="fa-solid fa-clock text-warm-accent mr-1"></i> Режим работы: Пн-Пт 09:00 - 19:00 МСК
            </div>
        </div>
    </div>

    <footer class="border-t border-beige-200 bg-[#FAF8F5] py-6 text-center text-xs text-beige-500 no-print">
        <div class="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center space-x-2">
                <div class="w-6 h-6 rounded bg-espresso-900 text-beige-100 text-[10px] font-bold font-serif flex items-center justify-center">
                    C+
                </div>
                <span>© 2026 Consult+. Налоговый консалтинг & юридическая защита бизнеса.</span>
            </div>
            <div class="flex items-center space-x-4 text-beige-600 font-medium">
                <button onclick="quizApp.openContactModal()" class="hover:text-espresso-900 transition">Помощь и контакты</button>
                <span>•</span>
                <a href="https://t.me/nalogconsultt" target="_blank" rel="noopener" class="hover:text-espresso-900 transition flex items-center gap-1">
                    <i class="fa-brands fa-telegram"></i> Telegram
                </a>
            </div>
        </div>
    </footer>

    <!-- Toast Notification Box -->
    <div id="toast-notification" class="fixed bottom-5 right-5 bg-espresso-900 text-beige-100 px-4 py-3 rounded-xl shadow-xl transform translate-y-20 opacity-0 transition-all duration-300 z-50 text-xs font-medium flex items-center space-x-2">
        <i class="fa-solid fa-check-circle text-emerald-400 text-sm"></i>
        <span id="toast-message">Сообщение скопировано</span>
    </div>

    <script>
        // 10 Detailed Tax Risk Questions based on Russian FNS standards (2026)
        const quizQuestions = [
            {
                category: "Проверка контрагентов",
                title: "1. Как вы проверяете контрагентов перед заключением сделок?",
                hint: "ФНС активно применяет ст. 54.1 НК РФ по недобросовестным контрагентам и «фирмам-однодневкам».",
                options: [
                    { text: "Собираем полный пакет документов (выписка ЕГРЮЛ, Устав, полномочия, коммерческое предложение, штатка, фото офиса)", risk: 0, textDesc: "Максимальная должная осмотрительность" },
                    { text: "Ограничиваемся автоматической выпиской из СПАРК / Rusprofile перед подписанием", risk: 10, textDesc: "Частичный коммерческий риск" },
                    { text: "Проверяем только наличие компании в реестре ЕГРЮЛ", risk: 20, textDesc: "Высокая вероятность претензий ФНС" },
                    { text: "Не проводим регулярную системную проверку контрагентов", risk: 30, textDesc: "Критический риск доначислений по ст. 54.1 НК РФ" }
                ]
            },
            {
                category: "Дробление бизнеса",
                title: "2. Используются ли в вашем бизнесе несколько связанных компаний или ИП?",
                hint: "ФНС отслеживает единые IP-адреса, общие кадры, пересечение контрагентов и совпадение юридических адресов.",
                options: [
                    { text: "Работаем через одно юридическое лицо (или каждая структура имеет 100% деловую цель и разный профиль)", risk: 0, textDesc: "Минимальный риск дробления" },
                    { text: "Есть несколько связанных компаний, но у них раздельные кадры, склады и самостоятельные директора", risk: 10, textDesc: "Умеренный риск, требуется деловая цель" },
                    { text: "Есть несколько ООО/ИП на УСН с общим брендом, бухгалтерией и единым сайтом", risk: 25, textDesc: "Высокая вероятность признаков дробления бизнеса" },
                    { text: "Специально открываем новые ИП/ООО при достижении лимитов УСН", risk: 35, textDesc: "Прямой риск выездной проверки и доначисления НДС/Налога на прибыль" }
                ]
            },
            {
                category: "Работа с самозанятыми и ИП",
                title: "3. Какую долю в вашей деятельности занимают выплат самозанятым или внештатным ИП?",
                hint: "ФНС переквалифицирует договоры ГПХ с самозанятыми в трудовые при наличии графика работы, фиксированной оплаты или единственного источника дохода.",
                options: [
                    { text: "Не привлекаем самозанятых, либо их доля менее 5% от фонда оплаты труда и работы носят разовый характер", risk: 0, textDesc: "Безопасный уровень" },
                    { text: "Привлекаем самозанятых на проектные работы с актами приема-передачи без фиксированного графика", risk: 10, textDesc: "Умеренный риск" },
                    { text: "Бывшие сотрудники зарегистрировались как самозанятые и продолжают выполнять те же функции", risk: 25, textDesc: "Прямой риск переквалификации в трудовые" },
                    { text: "Основной состав команды оформлен как самозанятые или ИП с ежемесячной фиксированной выплатой", risk: 35, textDesc: "Критический риск доначисления НДФЛ и страховых взносов" }
                ]
            },
            {
                category: "Налоговая нагрузка",
                title: "4. Соответствует ли ваша налоговая нагрузка среднеотраслевым значениям ФНС?",
                hint: "Низкая налоговая нагрузка — главный триггер для вызова на комиссию в ФНС.",
                options: [
                    { text: "Налоговая нагрузка полностью соответствует или превышает среднеотраслевые показатели", risk: 0, textDesc: "Безопасная зона" },
                    { text: "Незначительно ниже среднеотраслевой (отклонение до 10-15%)", risk: 10, textDesc: "Зона внимания ФНС" },
                    { text: "Заметно ниже показателей по региону и отрасли (более 20-30%)", risk: 25, textDesc: "Высокий риск вызова на протокольную комиссию" },
                    { text: "Не отслеживаем налоговую нагрузку и не сравниваем с отраслевыми критериями", risk: 30, textDesc: "Риск попасть в план выездных проверок" }
                ]
            },
            {
                category: "Заработная плата",
                title: "5. Какой уровень заработной платы выплачивается сотрудникам компании?",
                hint: "ФНС сопоставляет зарплату с региональным МРОТ и средними зарплатами по отрасли.",
                options: [
                    { text: "Все сотрудники получают официальную зарплату выше среднеотраслевого уровня по региону", risk: 0, textDesc: "Полное соответствие" },
                    { text: "Зарплаты на уровне среднеотраслевых значений", risk: 5, textDesc: "Норма" },
                    { text: "Зарплаты выплачиваются на уровне МРОТ или чуть выше, часть сотрудников на 0.5 ставки", risk: 20, textDesc: "Повышенный риск проверок ГИТ и ФНС" },
                    { text: "Используются неофициальные выплаты «в конвертах»", risk: 35, textDesc: "Критический налоговый и уголовно-правовой риск" }
                ]
            },
            {
                category: "Документооборот",
                title: "6. Какова степень полноты первичных документов (акты, УПД, ТОРГ-12, Договоры)?",
                hint: "Отсутствие реальной первички или её оформление «задним числом» — первый аргумент ФНС при отказе в вычетах.",
                options: [
                    { text: "100% сделок подтверждены оригиналами договоров, актов, УПД и транспортных накладных", risk: 0, textDesc: "Идеальный документооборот" },
                    { text: "Есть небольшой процент скан-копий (до 5-10%), оригиналы дособираются регулярно", risk: 10, textDesc: "Рабочий уровень" },
                    { text: "Отсутствуют первичные документы по 15-30% проведенных операций", risk: 25, textDesc: "Риск снятия расходов и вычетов по НДС" },
                    { text: "Документы оформляются хаотично, оригиналы по крупным сделкам часто отсутствуют", risk: 35, textDesc: "Высокий риск доначисления налогов" }
                ]
            },
            {
                category: "Банковский контроль (115-ФЗ)",
                title: "7. Были ли у компании запросы от банков или блокировки счетов по 115-ФЗ?",
                hint: "Запросы по 115-ФЗ и высокий уровень снятия наличных сигнализируют о рисках транзитных операций.",
                options: [
                    { text: "Запросов по 115-ФЗ не было, наличные со счета не снимаем, уплата налогов >1% от оборота", risk: 0, textDesc: "Отличный банковский рейтинг" },
                    { text: "Были единичные запросы документов от банка, успешно предоставлены без блокировок", risk: 10, textDesc: "Нормальная практика" },
                    { text: "Банк ограничивал дистанционное банковское обслуживание (ДБО) или запрашивал пояснения по снятию наличных", risk: 25, textDesc: "Повышенный уровень внимания Финмониторинга" },
                    { text: "Имели место блокировки счетов или занесение в «красную зону» ЗСК ЦБ РФ", risk: 35, textDesc: "Критическая банковская зона риска" }
                ]
            },
            {
                category: "Требования ФНС (ст. 93, 93.1)",
                title: "8. Как часто компания получает требования ФНС о предоставлении документов и пояснений?",
                hint: "Частые требования вне рамок проверок указывают на включение компании в цепочку риска (АСК НДС-2).",
                options: [
                    { text: "Требования поступают редко (1-3 раза в год) по плановым сверкам", risk: 0, textDesc: "Низкая активность ФНС" },
                    { text: "Требования приходят регулярно по встречным проверкам контрагентов, всегда отвечаем в срок", risk: 10, textDesc: "Стандартный контроль" },
                    { text: "Поступают требования с вызовами генерального директора на допросы в налоговую", risk: 25, textDesc: "Прямой сигнал о повышенном риске" },
                    { text: "Получаем регулярные требования по «несформированным источникам НДС» (разрывам)", risk: 35, textDesc: "Высокая вероятность предъявления претензий" }
                ]
            },
            {
                category: "Убытки и вычеты НДС",
                title: "9. Какой процент вычетов по НДС заявляется в декларациях или каков финансовый результат?",
                hint: "Удельный вес вычетов НДС более 89% — формальный критерий для включения в план проверок.",
                options: [
                    { text: "Доля вычетов НДС не превышает 80-85%, компания стабильно показывает прибыль", risk: 0, textDesc: "Безопасная зона" },
                    { text: "Доля вычетов 85-89%, прибыльность плавающая", risk: 10, textDesc: "Пограничное значение" },
                    { text: "Доля вычетов НДС регулярно превышает 89-90%", risk: 25, textDesc: "Превышение безопасного лимита ФНС" },
                    { text: "Компания заявляет убытки более 2 налоговых периодов подряд или возмещение НДС из бюджета", risk: 30, textDesc: "Гарантированное внимание налоговых органов" }
                ]
            },
            {
                category: "Внутригрупповые операции и займы",
                title: "10. Использует ли компания беспроцентные займы, переводы учредителям или лицензионные платежи?",
                hint: "Внутригрупповые займы и вывод средств учредителям — частая цель налогового контроля.",
                options: [
                    { text: "Внутригрупповые займы не используются или оформлены по рыночным процентным ставкам", risk: 0, textDesc: "Прозрачная структура" },
                    { text: "Используются редкие беспроцентные займы между юрлицами с своевременным возвратом", risk: 10, textDesc: "Допустимо при наличии обоснования" },
                    { text: "Значительные суммы числятся в подотчете или задолженности учредителей более 1 года", risk: 25, textDesc: "Риск переквалификации в дивиденды" },
                    { text: "Систематически выводятся средства под видом займов или нерыночных роялти/услуг", risk: 35, textDesc: "Высокий риск доначисления НДФЛ и налога на прибыль" }
                ]
            }
        ];

        class TaxQuizApp {
            constructor() {
                this.currentQuestionIndex = 0;
                this.userAnswers = new Array(quizQuestions.length).fill(null);

                // DOM Elements
                this.introScreen = document.getElementById('intro-screen');
                this.quizScreen = document.getElementById('quiz-screen');
                this.resultsScreen = document.getElementById('results-screen');

                this.questionCategory = document.getElementById('question-category');
                this.currentStep = document.getElementById('current-step');
                this.progressBar = document.getElementById('progress-bar');
                this.questionTitle = document.getElementById('question-title');
                this.questionHint = document.getElementById('question-hint');
                this.optionsContainer = document.getElementById('options-container');

                this.prevBtn = document.getElementById('prev-btn');
                this.nextBtn = document.getElementById('next-btn');
                this.nextBtnText = document.getElementById('next-btn-text');

                this.contactModal = document.getElementById('contact-modal');
                this.privacyModal = document.getElementById('privacy-modal');
            }

            init() {
                console.log("Consult+ Tax Quiz App Initialized successfully.");
            }

            startQuiz() {
                this.currentQuestionIndex = 0;
                this.userAnswers = new Array(quizQuestions.length).fill(null);
                
                if (this.introScreen) this.introScreen.classList.add('hidden');
                if (this.resultsScreen) this.resultsScreen.classList.add('hidden');
                if (this.quizScreen) this.quizScreen.classList.remove('hidden');

                this.renderQuestion();
            }

            renderQuestion() {
                const q = quizQuestions[this.currentQuestionIndex];
                if (!q) return;

                if (this.questionCategory) this.questionCategory.textContent = q.category;
                if (this.currentStep) this.currentStep.textContent = this.currentQuestionIndex + 1;
                
                const progressPercent = ((this.currentQuestionIndex + 1) / quizQuestions.length) * 100;
                if (this.progressBar) this.progressBar.style.width = `${progressPercent}%`;

                if (this.questionTitle) this.questionTitle.textContent = q.title;
                if (this.questionHint) this.questionHint.textContent = q.hint;

                if (this.optionsContainer) {
                    this.optionsContainer.innerHTML = '';
                    const selectedIdx = this.userAnswers[this.currentQuestionIndex];

                    q.options.forEach((opt, idx) => {
                        const isSelected = selectedIdx === idx;
                        const optionBtn = document.createElement('button');
                        optionBtn.type = 'button';
                        optionBtn.onclick = () => this.selectOption(idx);
                        optionBtn.className = `option-card w-full p-4 rounded-xl border text-left flex items-center justify-between transition cursor-pointer ${
                            isSelected 
                                ? 'bg-espresso-900 text-beige-50 border-espresso-900 shadow-sm' 
                                : 'bg-beige-50/60 hover:bg-white text-espresso-900 border-beige-200 hover:border-beige-300'
                        }`;

                        optionBtn.innerHTML = `
                            <div class="flex items-start space-x-3 pr-3">
                                <div class="w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                                    isSelected ? 'border-beige-100 bg-warm-accent text-white' : 'border-beige-400 bg-white'
                                }">
                                    ${isSelected ? '<i class="fa-solid fa-check text-[10px]"></i>' : ''}
                                </div>
                                <div>
                                    <div class="text-xs sm:text-sm font-semibold leading-snug">${opt.text}</div>
                                    <div class="text-[11px] ${isSelected ? 'text-beige-300' : 'text-beige-600'} mt-1">${opt.textDesc}</div>
                                </div>
                            </div>
                        `;
                        this.optionsContainer.appendChild(optionBtn);
                    });
                }

                if (this.prevBtn) {
                    this.prevBtn.disabled = this.currentQuestionIndex === 0;
                }

                if (this.nextBtn) {
                    this.nextBtn.disabled = this.userAnswers[this.currentQuestionIndex] === null;
                    if (this.nextBtnText) {
                        this.nextBtnText.textContent = this.currentQuestionIndex === quizQuestions.length - 1 ? 'Завершить' : 'Далее';
                    }
                }
            }

            selectOption(index) {
                this.userAnswers[this.currentQuestionIndex] = index;
                this.renderQuestion();
            }

            nextQuestion() {
                if (this.userAnswers[this.currentQuestionIndex] === null) return;

                if (this.currentQuestionIndex < quizQuestions.length - 1) {
                    this.currentQuestionIndex++;
                    this.renderQuestion();
                } else {
                    this.showResults();
                }
            }

            prevQuestion() {
                if (this.currentQuestionIndex > 0) {
                    this.currentQuestionIndex--;
                    this.renderQuestion();
                }
            }

            calculateResults() {
                let totalPoints = 0;
                let maxPoints = 0;
                const vulnerabilities = [];

                quizQuestions.forEach((q, idx) => {
                    const ansIdx = this.userAnswers[idx];
                    const selectedOpt = ansIdx !== null ? q.options[ansIdx] : q.options[0];
                    const maxOptRisk = Math.max(...q.options.map(o => o.risk));
                    
                    totalPoints += selectedOpt.risk;
                    maxPoints += maxOptRisk;

                    if (selectedOpt.risk >= 20) {
                        vulnerabilities.push({
                            category: q.category,
                            userAnswer: selectedOpt.text,
                            riskLevel: selectedOpt.risk >= 30 ? 'Критический' : 'Высокий',
                            recommendation: selectedOpt.textDesc
                        });
                    }
                });

                const percentScore = Math.min(100, Math.round((totalPoints / maxPoints) * 100));
                return { percentScore, vulnerabilities };
            }

            showResults() {
                if (this.quizScreen) this.quizScreen.classList.add('hidden');
                if (this.resultsScreen) this.resultsScreen.classList.remove('hidden');

                const { percentScore, vulnerabilities } = this.calculateResults();

                const scoreCircle = document.getElementById('score-circle');
                const scorePercent = document.getElementById('risk-score-percent');
                const riskTitle = document.getElementById('risk-level-title');
                const riskDesc = document.getElementById('risk-level-description');
                const riskBadge = document.getElementById('risk-badge');

                if (scorePercent) scorePercent.textContent = `${percentScore}%`;
                if (scoreCircle) {
                    scoreCircle.setAttribute('stroke-dasharray', `${percentScore}, 100`);
                }

                if (percentScore < 30) {
                    if (riskTitle) riskTitle.textContent = "Низкий уровень налоговых рисков";
                    if (riskDesc) riskDesc.textContent = "Ваш бизнес имеет прочную налоговую дисциплину. Проверьте отдельные зоны внимания для полной уверенности.";
                    if (riskBadge) {
                        riskBadge.className = "inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-sm bg-emerald-100 text-emerald-800 border border-emerald-300";
                        riskBadge.innerHTML = `<i class="fa-solid fa-shield-check"></i> <span>Безопасная зона</span>`;
                    }
                } else if (percentScore < 65) {
                    if (riskTitle) riskTitle.textContent = "Умеренный уровень риска (Внимание ФНС)";
                    if (riskDesc) riskDesc.textContent = "Выявлены факторы, которые могут вызвать интерес ФНС, запросы документов по ст. 93.1 НК РФ или вызов на комиссию.";
                    if (riskBadge) {
                        riskBadge.className = "inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-sm bg-amber-100 text-amber-800 border border-amber-300";
                        riskBadge.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <span>Зона умеренного риска</span>`;
                    }
                } else {
                    if (riskTitle) riskTitle.textContent = "Высокий уровень риска (Угроза проверки)";
                    if (riskDesc) riskDesc.textContent = "Высокая вероятность выездной налоговой проверки, переквалификации договоров или доначислений по ст. 54.1 НК РФ.";
                    if (riskBadge) {
                        riskBadge.className = "inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-sm bg-rose-100 text-rose-800 border border-rose-300";
                        riskBadge.innerHTML = `<i class="fa-solid fa-radiation text-rose-600"></i> <span>Критический индекс риска</span>`;
                    }
                }

                const vulnContainer = document.getElementById('vulnerabilities-list');
                if (vulnContainer) {
                    vulnContainer.innerHTML = '';

                    if (vulnerabilities.length === 0) {
                        vulnContainer.innerHTML = `
                            <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold flex items-center gap-2">
                                <i class="fa-solid fa-circle-check text-emerald-600 text-base"></i>
                                <span>Критичеcких уязвимостей в ваших ответах не обнаружено!</span>
                            </div>
                        `;
                    } else {
                        vulnerabilities.forEach(v => {
                            const isCritical = v.riskLevel === 'Критический';
                            const card = document.createElement('div');
                            card.className = `p-4 rounded-xl border text-xs space-y-1.5 ${
                                isCritical ? 'bg-rose-50/70 border-rose-200' : 'bg-amber-50/70 border-amber-200'
                            }`;
                            card.innerHTML = `
                                <div class="flex items-center justify-between font-bold">
                                    <span class="text-espresso-900">${v.category}</span>
                                    <span class="${isCritical ? 'text-rose-700 bg-rose-100' : 'text-amber-800 bg-amber-100'} px-2 py-0.5 rounded text-[10px] uppercase">${v.riskLevel} риск</span>
                                </div>
                                <div class="text-beige-600">${v.userAnswer}</div>
                                <div class="text-espresso-800 font-medium pt-1 border-t border-beige-200/60"><i class="fa-solid fa-lightbulb text-warm-accent mr-1"></i> ${v.recommendation}</div>
                            `;
                            vulnContainer.appendChild(card);
                        });
                    }
                }

                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            restartQuiz() {
                if (this.resultsScreen) this.resultsScreen.classList.add('hidden');
                if (this.quizScreen) this.quizScreen.classList.add('hidden');
                if (this.introScreen) this.introScreen.classList.remove('hidden');
                this.currentQuestionIndex = 0;
                this.userAnswers = new Array(quizQuestions.length).fill(null);
            }

            // Modal Management Methods
            openContactModal() { if (this.contactModal) this.contactModal.classList.remove('hidden'); }
            closeContactModal() { if (this.contactModal) this.contactModal.classList.add('hidden'); }

            openPrivacyModal() { if (this.privacyModal) this.privacyModal.classList.remove('hidden'); }
            closePrivacyModal() { if (this.privacyModal) this.privacyModal.classList.add('hidden'); }

            showToast(message) {
                const toast = document.getElementById('toast-notification');
                const toastMsg = document.getElementById('toast-message');
                if (!toast || !toastMsg) return;

                toastMsg.textContent = message;
                toast.classList.remove('translate-y-20', 'opacity-0');
                setTimeout(() => {
                    toast.classList.add('translate-y-20', 'opacity-0');
                }, 3000);
            }

            copyResultsToClipboard() {
                const { percentScore } = this.calculateResults();
                const summaryText = `Результаты экспресс-теста налоговых рисков Consult+: Индекс риска ${percentScore}%. Пройти тест на защищенность от проверок ФНС: https://t.me/nalogconsultt`;

                const textarea = document.createElement('textarea');
                textarea.value = summaryText;
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    this.showToast('Отчет скопирован в буфер обмена');
                } catch (err) {
                    this.showToast('Не удалось скопировать текст');
                }
                document.body.removeChild(textarea);
            }
        }

        window.quizApp = new TaxQuizApp();
        document.addEventListener('DOMContentLoaded', () => {
            window.quizApp.init();
        });
    </script>
</body>
</html>
