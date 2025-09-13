
        // Sample book data
        const books = [
            {
                id: 1,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                genre: "Fiction",
                description: "A classic American novel set in the Jazz Age, exploring themes of idealism, resistance to change, social upheaval, and excess.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=The+Great+Gatsby",
                pages: 180,
                rating: 4.2,
                published: "1925"
            },
            {
                id: 2,
                title: "Sapiens: A Brief History of Humankind",
                author: "Yuval Noah Harari",
                genre: "Non-fiction",
                description: "A captivating journey through the history of humankind, from the evolution of Homo sapiens to the present day.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Sapiens",
                pages: 443,
                rating: 4.5,
                published: "2011"
            },
            {
                id: 3,
                title: "A Brief History of Time",
                author: "Stephen Hawking",
                genre: "Science",
                description: "An exploration of cosmology, from the Big Bang to black holes, written for the non-specialist reader.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=A+Brief+History+of+Time",
                pages: 256,
                rating: 4.3,
                published: "1988"
            },
            {
                id: 4,
                title: "The Art of War",
                author: "Sun Tzu",
                genre: "History",
                description: "An ancient Chinese military treatise that has influenced both Western and East Asian military thinking, business tactics, and legal strategy.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=The+Art+of+War",
                pages: 156,
                rating: 4.4,
                published: "5th century BC"
            },
            {
                id: 5,
                title: "Harry Potter and the Sorcerer's Stone",
                author: "J.K. Rowling",
                genre: "Fantasy",
                description: "The first book in the Harry Potter series, following a young wizard's first year at Hogwarts School of Witchcraft and Wizardry.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Harry+Potter",
                pages: 309,
                rating: 4.8,
                published: "1997"
            },
            {
                id: 6,
                title: "The Girl with the Dragon Tattoo",
                author: "Stieg Larsson",
                genre: "Mystery",
                description: "A psychological thriller featuring journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate a decades-old disappearance.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Dragon+Tattoo",
                pages: 465,
                rating: 4.1,
                published: "2005"
            },
            {
                id: 7,
                title: "Steve Jobs",
                author: "Walter Isaacson",
                genre: "Biography",
                description: "The definitive biography of Apple co-founder Steve Jobs, based on over forty interviews with Jobs and more than a hundred interviews with family members, friends, competitors, and colleagues.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Steve+Jobs",
                pages: 656,
                rating: 4.3,
                published: "2011"
            },
            {
                id: 8,
                title: "Atomic Habits",
                author: "James Clear",
                genre: "Self-help",
                description: "A practical guide on how to build good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Atomic+Habits",
                pages: 320,
                rating: 4.7,
                published: "2018"
            },
            {
                id: 9,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                genre: "Fiction",
                description: "A novel about the serious issues of rape and racial inequality through the eyes of a young girl in the American South during the 1930s.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Mockingbird",
                pages: 281,
                rating: 4.3,
                published: "1960"
            },
            {
                id: 10,
                title: "Thinking, Fast and Slow",
                author: "Daniel Kahneman",
                genre: "Non-fiction",
                description: "A summary of decades of research that has led to Kahneman's Nobel Prize, explaining how we think and make decisions.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Fast+and+Slow",
                pages: 499,
                rating: 4.2,
                published: "2011"
            },
            {
                id: 11,
                title: "Cosmos",
                author: "Carl Sagan",
                genre: "Science",
                description: "A popular science book that covers a wide range of topics including the origin of life and a perspective of our place in the universe.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Cosmos",
                pages: 365,
                rating: 4.6,
                published: "1980"
            },
            {
                id: 12,
                title: "Guns, Germs, and Steel",
                author: "Jared Diamond",
                genre: "History",
                description: "An exploration of why Eurasian civilizations have survived and conquered others, rejecting racial explanations and focusing on environmental factors.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Guns+Germs+Steel",
                pages: 480,
                rating: 4.0,
                published: "1997"
            },
            {
                id: 13,
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                genre: "Fantasy",
                description: "An epic high-fantasy novel set in Middle-earth, following the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Lord+of+Rings",
                pages: 1216,
                rating: 4.7,
                published: "1954"
            },
            {
                id: 14,
                title: "The Da Vinci Code",
                author: "Dan Brown",
                genre: "Mystery",
                description: "A mystery thriller that follows symbologist Robert Langdon as he investigates a murder in Paris's Louvre Museum and discovers clues leading to the Holy Grail.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Da+Vinci+Code",
                pages: 454,
                rating: 3.9,
                published: "2003"
            },
            {
                id: 15,
                title: "Leonardo da Vinci",
                author: "Walter Isaacson",
                genre: "Biography",
                description: "A comprehensive biography of Leonardo da Vinci, based on thousands of pages from his notebooks and new discoveries about his life and work.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Leonardo",
                pages: 624,
                rating: 4.4,
                published: "2017"
            },
            {
                id: 16,
                title: "The 7 Habits of Highly Effective People",
                author: "Stephen R. Covey",
                genre: "Self-help",
                description: "A business and self-help book that presents an approach to being effective in attaining goals by aligning oneself to what Covey calls 'true north' principles.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=7+Habits",
                pages: 384,
                rating: 4.1,
                published: "1989"
            },
            {
                id: 17,
                title: "1984",
                author: "George Orwell",
                genre: "Fiction",
                description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism, surveillance, and thought control.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=1984",
                pages: 328,
                rating: 4.5,
                published: "1949"
            },
            {
                id: 18,
                title: "The Immortal Life of Henrietta Lacks",
                author: "Rebecca Skloot",
                genre: "Non-fiction",
                description: "The story of Henrietta Lacks, whose cancer cells were taken without her knowledge and became one of the most important tools in medicine.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Henrietta+Lacks",
                pages: 400,
                rating: 4.2,
                published: "2010"
            },
            {
                id: 19,
                title: "The Structure of Scientific Revolutions",
                author: "Thomas S. Kuhn",
                genre: "Science",
                description: "An analysis of the history of science, introducing the concept of paradigm shifts and challenging the traditional view of scientific progress.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=Scientific+Revolutions",
                pages: 212,
                rating: 4.0,
                published: "1962"
            },
            {
                id: 20,
                title: "A People's History of the United States",
                author: "Howard Zinn",
                genre: "History",
                description: "A volume that tells U.S. history from the perspective of ordinary people rather than political and economic elites.",
                cover: "https://placehold.co/300x450/3182ce/ffffff?text=People's+History",
                pages: 729,
                rating: 4.3,
                published: "1980"
            }
        ];

        // AI Assistant responses
        const aiResponses = {
            greeting: [
                "Hello! I'm your Library AI Assistant. How can I help you today?",
                "Welcome to our digital library! I'm here to help you find books and answer any questions.",
                "Hi there! Looking for a good book? I can recommend something based on your interests."
            ],
            recommendation: [
                "Based on your reading history, I recommend '%s'. It's a %s book by %s that you might enjoy.",
                "You might like '%s'. It's similar to %s which you previously enjoyed.",
                "I think you'd appreciate '%s' - it has a %s rating and matches your interest in %s."
            ],
            search: [
                "I found %d books matching your search for '%s'.",
                "There are several books about %s. Let me show you the most popular ones.",
                "I've located %d results for '%s'. You can filter them by genre or sort by rating."
            ],
            librarian: [
                "The most popular book this week is '%s' with %d checkouts.",
                "We have %d books in the %s category. The highest rated is '%s' with %.1f stars.",
                "Reader engagement is up %.1f%% this month. The top genre is %s."
            ],
            general: [
                "Our library has over 10,000 books across 20+ genres. What are you interested in?",
                "You can search by title, author, or genre. Try using the filters to narrow your results.",
                "Don't forget to complete the questionnaire after finishing a book - it helps me give you better recommendations!",
                "Bookmark your favorite books by clicking the bookmark icon while reading.",
                "You can track your reading progress for each book. We'll remember where you left off.",
                "Try our dark mode for comfortable nighttime reading. Just click the moon icon in the header.",
                "We add new books every week. Check the 'Recently Added' section for the latest titles."
            ],
            question: [
                "That's an interesting question! %s",
                "Great question! %s",
                "I'd be happy to help with that. %s"
            ]
        };

        // Questionnaire templates by genre
        const questionnaireTemplates = {
            "Fiction": [
                {
                    type: "rating",
                    question: "How would you rate the plot of this book?",
                    options: 5
                },
                {
                    type: "rating",
                    question: "How engaging were the characters?",
                    options: 5
                },
                {
                    type: "multiple-choice",
                    question: "What did you like most about this book?",
                    options: ["The plot", "The characters", "The writing style", "The setting", "The themes"]
                },
                {
                    type: "text",
                    question: "Would you recommend this book to others? Why or why not?",
                    options: null
                }
            ],
            "Non-fiction": [
                {
                    type: "rating",
                    question: "How informative was this book?",
                    options: 5
                },
                {
                    type: "rating",
                    question: "How well was the information presented?",
                    options: 5
                },
                {
                    type: "multiple-choice",
                    question: "What was the most valuable insight you gained?",
                    options: ["New knowledge", "Changed perspective", "Practical applications", "Historical context", "Scientific understanding"]
                },
                {
                    type: "text",
                    question: "How has this book impacted your thinking or behavior?",
                    options: null
                }
            ],
            "Science": [
                {
                    type: "rating",
                    question: "How clearly were complex concepts explained?",
                    options: 5
                },
                {
                    type: "rating",
                    question: "How relevant is the scientific content to current understanding?",
                    options: 5
                },
                {
                    type: "multiple-choice",
                    question: "Which scientific concept from this book interested you most?",
                    options: ["Theoretical concepts", "Experimental evidence", "Historical development", "Future implications", "Practical applications"]
                },
                {
                    type: "text",
                    question: "What questions about this topic do you still have?",
                    options: null
                }
            ],
            "History": [
                {
                    type: "rating",
                    question: "How comprehensive was the historical coverage?",
                    options: 5
                },
                {
                    type: "rating",
                    question: "How engaging was the historical narrative?",
                    options: 5
                },
                {
                    type: "multiple-choice",
                    question: "Which historical period or event was most compelling?",
                    options: ["Ancient history", "Medieval period", "Renaissance", "Modern era", "Contemporary history"]
                },
                {
                    type: "text",
                    question: "How has this book changed your understanding of history?",
                    options: null
                }
            ],
            "Fantasy": [
                {
                    type: "rating",
                    question: "How immersive was the fantasy world?",
                    options: 5
                },
                {
                    type: "rating",
                    question: "How original was the magic system or world-building?",
                    options: 5
                },
                {
                    type: "multiple-choice",
                    question: "What element of fantasy did you enjoy most?",
                    options: ["Magic system", "World-building", "Creatures", "Quest narrative", "Character development"]
                },
                {
                    type: "text",
                    question: "If you could visit this fantasy world, where would you go and why?",
                    options: null
                }
            ],
            "Mystery": [
                {
                    type: "rating",
                    question: "How satisfying was the mystery resolution?",
                    options: 5
                },
                {
                    type: "rating",
                    question: "How well were the clues presented?",
                    options: 5
                },
                {
                    type: "multiple-choice",
                    question: "What made this mystery compelling?",
                    options: ["Plot twists", "Suspense", "Detective character", "Clue placement", "Atmosphere"]
                },
                {
                    type: "text",
                    question: "Did you guess the solution before it was revealed? What clues led you there?",
                    options: null
                }
            ],
            "Biography": [
                {
                    type: "rating",
                    question: "How well did this biography capture the subject's personality?",
                    options: 5
                },
                {
                    type: "rating",
                    question: "How inspiring or informative was the subject's life story?",
                    options: 5
                },
                {
                    type: "multiple-choice",
                    question: "What aspect of the subject's life was most interesting?",
                    options: ["Early life", "Career achievements", "Personal relationships", "Challenges overcome", "Legacy"]
                },
                {
                    type: "text",
                    question: "What lesson or inspiration did you take from this person's life?",
                    options: null
                }
            ],
            "Self-help": [
                {
                    type: "rating",
                    question: "How practical were the advice and techniques presented?",
                    options: 5
                },
                {
                    type: "rating",
                    question: "How likely are you to implement what you learned?",
                    options: 5
                },
                {
                    type: "multiple-choice",
                    question: "Which concept or technique was most valuable to you?",
                    options: ["Mindset shifts", "Practical exercises", "Scientific backing", "Personal stories", "Actionable steps"]
                },
                {
                    type: "text",
                    question: "What specific changes will you make based on what you learned?",
                    options: null
                }
            ],
            "default": [
                {
                    type: "rating",
                    question: "Overall, how would you rate this book?",
                    options: 5
                },
                {
                    type: "rating",
                    question: "How likely are you to recommend this book to others?",
                    options: 5
                },
                {
                    type: "text",
                    question: "What did you like most about this book?",
                    options: null
                },
                {
                    type: "text",
                    question: "What could be improved in this book?",
                    options: null
                }
            ]
        };

        // DOM Elements
        const bookGrid = document.getElementById('book-grid');
        const searchInput = document.getElementById('search-input');
        const genreFilter = document.getElementById('genre-filter');
        const sortBy = document.getElementById('sortBy');
        const bookModal = document.getElementById('book-modal');
        const bookDetailContent = document.getElementById('book-detail-content');
        const closeBookModal = document.getElementById('close-book-modal');
        const readingModal = document.getElementById('reading-modal');
        const readingContent = document.getElementById('reading-content');
        const closeReadingModal = document.getElementById('close-reading-modal');
        const questionnaireModal = document.getElementById('questionnaire-modal');
        const questionnaireContent = document.getElementById('questionnaire-content');
        const closeQuestionnaireModal = document.getElementById('close-questionnaire-modal');
        const aiAssistant = document.getElementById('ai-assistant');
        const aiHeader = document.getElementById('ai-header');
        const aiToggle = document.getElementById('ai-toggle');
        const aiBody = document.getElementById('ai-body');
        const aiMessages = document.getElementById('ai-messages');
        const aiInput = document.getElementById('ai-input');
        const aiSend = document.getElementById('ai-send');
        const themeToggle = document.getElementById('theme-toggle');
        const highContrastToggle = document.getElementById('high-contrast-toggle');
        const librarianToggle = document.getElementById('librarian-toggle');
        const loading = document.getElementById('loading');

        // State variables
        let currentBook = null;
        let currentPage = 1;
        let isLibrarianMode = false;
        let conversationHistory = [];
        let readingProgress = JSON.parse(localStorage.getItem('readingProgress')) || {};

        // Initialize the application
        function init() {
            renderBooks(books);
            setupEventListeners();
            loadReadingProgress();
        }

        // Render books in the grid
        function renderBooks(bookList) {
            bookGrid.innerHTML = '';
            
            // Show loading indicator
            loading.style.display = 'block';
            
            // Simulate loading delay
            setTimeout(() => {
                loading.style.display = 'none';
                
                if (bookList.length === 0) {
                    bookGrid.innerHTML = '<p class="slide-up">No books found matching your criteria. Try adjusting your search or filters.</p>';
                    return;
                }
                
                bookList.forEach(book => {
                    const bookCard = document.createElement('div');
                    bookCard.className = 'book-card slide-up';
                    bookCard.dataset.id = book.id;
                    
                    // Get reading progress for this book
                    const progress = readingProgress[book.id] || 0;
                    const isCompleted = progress >= 100;
                    
                    bookCard.innerHTML = `
                        <img src="${book.cover}" alt="${book.title} cover" class="book-cover">
                        <div class="book-info">
                            <h3 class="book-title">${book.title}</h3>
                            <p class="book-author">by ${book.author}</p>
                            <span class="book-genre">${book.genre}</span>
                            <p>⭐ ${book.rating} (${book.published})</p>
                            <div class="book-progress">
                                <div class="progress-bar" style="width: ${progress}%"></div>
                            </div>
                            <p>${isCompleted ? 'Completed' : `${Math.round(progress)}% read`}</p>
                        </div>
                    `;
                    
                    bookCard.addEventListener('click', () => openBookDetail(book));
                    bookGrid.appendChild(bookCard);
                });
            }, 500);
        }

        // Setup event listeners
        function setupEventListeners() {
            // Search and filter
            searchInput.addEventListener('input', filterBooks);
            genreFilter.addEventListener('change', filterBooks);
            sortBy.addEventListener('change', sortBooks);
            
            // Modal close buttons
            closeBookModal.addEventListener('click', () => bookModal.style.display = 'none');
            closeReadingModal.addEventListener('click', () => readingModal.style.display = 'none');
            closeQuestionnaireModal.addEventListener('click', () => questionnaireModal.style.display = 'none');
            
            // Close modals when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === bookModal) bookModal.style.display = 'none';
                if (e.target === readingModal) readingModal.style.display = 'none';
                if (e.target === questionnaireModal) questionnaireModal.style.display = 'none';
            });
            
            // AI Assistant
            aiHeader.addEventListener('click', toggleAIAssistant);
            aiToggle.addEventListener('click', toggleAIAssistant);
            aiSend.addEventListener('click', sendAIQuery);
            aiInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') sendAIQuery();
            });
            
            // Theme toggle
            themeToggle.addEventListener('click', toggleTheme);
            
            // High contrast toggle
            highContrastToggle.addEventListener('click', toggleHighContrast);
            
            // Librarian mode toggle
            librarianToggle.addEventListener('click', toggleLibrarianMode);
            
            // Navigation links
            document.getElementById('home-link').addEventListener('click', (e) => {
                e.preventDefault();
                renderBooks(books);
            });
            
            document.getElementById('catalog-link').addEventListener('click', (e) => {
                e.preventDefault();
                renderBooks(books);
            });
            
            document.getElementById('reading-link').addEventListener('click', (e) => {
                e.preventDefault();
                const readingBooks = books.filter(book => (readingProgress[book.id] || 0) > 0);
                renderBooks(readingBooks);
            });
            
            document.getElementById('recommendations-link').addEventListener('click', (e) => {
                e.preventDefault();
                showRecommendations();
            });
        }

        // Filter books based on search and genre
        function filterBooks() {
            const searchTerm = searchInput.value.toLowerCase();
            const genre = genreFilter.value;
            
            let filteredBooks = books.filter(book => {
                const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                                    book.author.toLowerCase().includes(searchTerm) ||
                                    book.description.toLowerCase().includes(searchTerm);
                const matchesGenre = genre === '' || book.genre === genre;
                return matchesSearch && matchesGenre;
            });
            
            sortBooks(filteredBooks);
        }

        // Sort books
        function sortBooks(filteredBooks = null) {
            if (!filteredBooks) {
                filteredBooks = books.filter(book => {
                    const searchTerm = searchInput.value.toLowerCase();
                    const genre = genreFilter.value;
                    const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                                        book.author.toLowerCase().includes(searchTerm) ||
                                        book.description.toLowerCase().includes(searchTerm);
                    const matchesGenre = genre === '' || book.genre === genre;
                    return matchesSearch && matchesGenre;
                });
            }
            
            const sortValue = sortBy.value;
            
            switch(sortValue) {
                case 'title':
                    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'author':
                    filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
                    break;
                case 'rating':
                    filteredBooks.sort((a, b) => b.rating - a.rating);
                    break;
                case 'recent':
                    filteredBooks.sort((a, b) => new Date(b.published) - new Date(a.published));
                    break;
            }
            
            renderBooks(filteredBooks);
        }

        // Open book detail modal
        function openBookDetail(book) {
            currentBook = book;
            
            bookDetailContent.innerHTML = `
                <div class="detail-header">
                    <img src="${book.cover}" alt="${book.title} cover" class="detail-cover">
                    <div class="detail-info">
                        <h1 class="detail-title">${book.title}</h1>
                        <p class="detail-author">by ${book.author}</p>
                        <span class="detail-genre">${book.genre}</span>
                        <p>⭐ ${book.rating} | Published: ${book.published} | ${book.pages} pages</p>
                        <p class="detail-description">${book.description}</p>
                        <div class="detail-actions">
                            <button class="btn btn-primary" id="start-reading-btn">Start Reading</button>
                            <button class="btn btn-secondary" id="bookmark-btn">Bookmark</button>
                        </div>
                    </div>
                </div>
            `;
            
            bookModal.style.display = 'flex';
            
            // Add event listeners to buttons
            document.getElementById('start-reading-btn').addEventListener('click', () => startReading(book));
            document.getElementById('bookmark-btn').addEventListener('click', () => bookmarkBook(book));
        }

        // Start reading a book
        function startReading(book) {
            currentBook = book;
            currentPage = readingProgress[book.id] ? Math.ceil((readingProgress[book.id] / 100) * book.pages) : 1;
            
            // Generate sample content for the page
            const content = generatePageContent(book, currentPage);
            
            readingContent.innerHTML = `
                <div class="reading-header">
                    <h2 class="reading-title">${book.title} - Page ${currentPage}</h2>
                    <div class="reading-controls">
                        <button class="btn btn-secondary" id="prev-page" ${currentPage <= 1 ? 'disabled' : ''}>Previous</button>
                        <button class="btn btn-primary" id="next-page">Next</button>
                    </div>
                </div>
                <div class="page-indicator">Page ${currentPage} of ${book.pages}</div>
                <div class="page-content">${content}</div>
                <div class="reading-controls" style="justify-content: center; margin-top: 2rem;">
                    <button class="btn btn-secondary" id="prev-page-bottom" ${currentPage <= 1 ? 'disabled' : ''}>Previous</button>
                    <button class="btn btn-primary" id="next-page-bottom">Next</button>
                </div>
            `;
            
            bookModal.style.display = 'none';
            readingModal.style.display = 'flex';
            
            // Add event listeners for page navigation
            document.getElementById('prev-page').addEventListener('click', previousPage);
            document.getElementById('next-page').addEventListener('click', nextPage);
            document.getElementById('prev-page-bottom').addEventListener('click', previousPage);
            document.getElementById('next-page-bottom').addEventListener('click', nextPage);
        }

        // Generate sample content for a page
        function generatePageContent(book, page) {
            // This is a simplified content generator
            // In a real app, this would pull from actual book content
            const loremIpsum = [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
                "Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
                "Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros.",
                "Fusce elit quam, pharetra a, pharetra vel, dapibus in, velit. Mauris convallis tortor a metus commodo lobortis.",
                "Aliquam erat volutpat. Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.",
                "Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci."
            ];
            
            let content = `<h3>Chapter ${Math.ceil(page / 5)}</h3>`;
            
            // Add 3-5 paragraphs per page
            const paragraphs = 3 + Math.floor(Math.random() * 3);
            for (let i = 0; i < paragraphs; i++) {
                const randomIndex = Math.floor(Math.random() * loremIpsum.length);
                content += `<p>${loremIpsum[randomIndex]}</p>`;
            }
            
            return content;
        }

        // Navigate to previous page
        function previousPage() {
            if (currentPage > 1) {
                currentPage--;
                updateReadingProgress();
                startReading(currentBook);
            }
        }

        // Navigate to next page
        function nextPage() {
            if (currentPage < currentBook.pages) {
                currentPage++;
                updateReadingProgress();
                
                // Check if book is completed
                if (currentPage >= currentBook.pages) {
                    // Mark as 100% complete
                    readingProgress[currentBook.id] = 100;
                    localStorage.setItem('readingProgress', JSON.stringify(readingProgress));
                    
                    // Show completion message and questionnaire
                    setTimeout(() => {
                        readingModal.style.display = 'none';
                        showQuestionnaire(currentBook);
                    }, 1000);
                } else {
                    startReading(currentBook);
                }
            }
        }

        // Update reading progress
        function updateReadingProgress() {
            const progress = (currentPage / currentBook.pages) * 100;
            readingProgress[currentBook.id] = progress;
            localStorage.setItem('readingProgress', JSON.stringify(readingProgress));
            
            // Update progress bars in book grid
            const bookCards = document.querySelectorAll('.book-card');
            bookCards.forEach(card => {
                const bookId = parseInt(card.dataset.id);
                if (bookId === currentBook.id) {
                    const progressBar = card.querySelector('.progress-bar');
                    progressBar.style.width = `${progress}%`;
                    
                    const progressText = card.querySelector('.book-info p:last-child');
                    if (progress >= 100) {
                        progressText.textContent = 'Completed';
                    } else {
                        progressText.textContent = `${Math.round(progress)}% read`;
                    }
                }
            });
        }

        // Bookmark a book
        function bookmarkBook(book) {
            // In a real app, this would save to a bookmarks collection
            // For now, we'll just show an alert
            alert(`${book.title} has been bookmarked!`);
            
            // You could also add a visual indicator to the book card
            const bookCard = document.querySelector(`.book-card[data-id="${book.id}"]`);
            if (bookCard) {
                const bookmarkBtn = bookCard.querySelector('.btn');
                if (bookmarkBtn) {
                    bookmarkBtn.textContent = 'Bookmarked ✓';
                    bookmarkBtn.disabled = true;
                }
            }
        }

        // Show questionnaire after completing a book
        function showQuestionnaire(book) {
            const template = questionnaireTemplates[book.genre] || questionnaireTemplates.default;
            
            let questionnaireHTML = `
                <div class="questionnaire-header">
                    <h2 class="questionnaire-title">Book Review: ${book.title}</h2>
                    <p class="questionnaire-subtitle">Help us improve our recommendations by answering a few questions</p>
                </div>
                <form id="questionnaire-form">
            `;
            
            template.forEach((question, index) => {
                questionnaireHTML += `
                    <div class="question">
                        <p class="question-text">${question.question}</p>
                `;
                
                if (question.type === 'rating') {
                    questionnaireHTML += `
                        <div class="rating-container" id="rating-${index}">
                    `;
                    for (let i = 1; i <= question.options; i++) {
                        questionnaireHTML += `
                            <span class="rating-star" data-rating="${i}" data-question="${index}">★</span>
                        `;
                    }
                    questionnaireHTML += `
                        </div>
                        <input type="hidden" name="q${index}" id="q${index}" value="0">
                    `;
                } else if (question.type === 'multiple-choice') {
                    questionnaireHTML += `
                        <div class="multiple-choice-container">
                    `;
                    question.options.forEach((option, optIndex) => {
                        questionnaireHTML += `
                            <div>
                                <input type="radio" name="q${index}" id="q${index}_${optIndex}" value="${option}">
                                <label for="q${index}_${optIndex}">${option}</label>
                            </div>
                        `;
                    });
                    questionnaireHTML += `
                        </div>
                    `;
                } else if (question.type === 'text') {
                    questionnaireHTML += `
                        <textarea name="q${index}" id="q${index}" placeholder="Your answer..."></textarea>
                    `;
                }
                
                questionnaireHTML += `
                    </div>
                `;
            });
            
            questionnaireHTML += `
                    <div style="text-align: center; margin-top: 2rem;">
                        <button type="submit" class="btn btn-primary">Submit Review</button>
                    </div>
                </form>
            `;
            
            questionnaireContent.innerHTML = questionnaireHTML;
            questionnaireModal.style.display = 'flex';
            
            // Add event listeners for rating stars
            document.querySelectorAll('.rating-star').forEach(star => {
                star.addEventListener('click', function() {
                    const rating = parseInt(this.dataset.rating);
                    const questionIndex = this.dataset.question;
                    
                    // Clear previous ratings
                    const stars = document.querySelectorAll(`.rating-star[data-question="${questionIndex}"]`);
                    stars.forEach(s => s.classList.remove('active'));
                    
                    // Set active ratings
                    for (let i = 0; i <= rating - 1; i++) {
                        stars[i].classList.add('active');
                    }
                    
                    // Set the hidden input value
                    document.getElementById(`q${questionIndex}`).value = rating;
                });
            });
            
            // Handle form submission
            document.getElementById('questionnaire-form').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Collect responses
                const responses = {};
                const formData = new FormData(this);
                
                for (let [key, value] of formData.entries()) {
                    responses[key] = value;
                }
                
                // Process responses and update recommendation engine
                processQuestionnaireResponses(book, responses);
                
                // Close modal
                questionnaireModal.style.display = 'none';
                
                // Show thank you message
                alert('Thank you for your feedback! Your responses will help us improve our recommendations.');
            });
        }

        // Process questionnaire responses
        function processQuestionnaireResponses(book, responses) {
            // In a real app, this would update a recommendation algorithm
            // For now, we'll just log the responses and save them to localStorage
            console.log('Questionnaire responses for', book.title, ':', responses);
            
            // Save responses to localStorage
            const reviews = JSON.parse(localStorage.getItem('bookReviews')) || {};
            reviews[book.id] = {
                book: book,
                responses: responses,
                date: new Date().toISOString()
            };
            localStorage.setItem('bookReviews', JSON.stringify(reviews));
            
            // Update book rating based on user response (simplified)
            const ratingResponse = responses.q0; // Assuming first question is overall rating
            if (ratingResponse && parseInt(ratingResponse) > 0) {
                // In a real app, you'd calculate an average rating from all users
                // For now, we'll just update the book's rating in our local data
                const bookIndex = books.findIndex(b => b.id === book.id);
                if (bookIndex !== -1) {
                    books[bookIndex].rating = (books[bookIndex].rating + parseInt(ratingResponse)) / 2;
                }
            }
        }

        // Toggle AI Assistant
        function toggleAIAssistant() {
            if (aiBody.style.display === 'block') {
                aiBody.style.display = 'none';
                aiToggle.textContent = '+';
            } else {
                aiBody.style.display = 'block';
                aiToggle.textContent = '−';
            }
        }

        // Send AI query
        function sendAIQuery() {
            const query = aiInput.value.trim();
            if (!query) return;
            
            // Add user message to chat
            addMessage(query, 'user');
            aiInput.value = '';
            
            // Process query and generate response
            setTimeout(() => {
                const response = generateAIResponse(query);
                addMessage(response, 'ai');
            }, 500);
        }

        // Add message to AI chat
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}-message`;
            messageDiv.textContent = text;
            aiMessages.appendChild(messageDiv);
            aiMessages.scrollTop = aiMessages.scrollHeight;
            
            // Add to conversation history
            conversationHistory.push({
                sender: sender,
                text: text,
                timestamp: new Date()
            });
        }

        // Generate AI response based on query
        function generateAIResponse(query) {
            query = query.toLowerCase();
            
            // Check for librarian mode queries
            if (isLibrarianMode) {
                if (query.includes('popular') || query.includes('statistics') || query.includes('analytics')) {
                    // Get most popular book
                    let mostPopularBook = books[0];
                    let maxProgress = 0;
                    
                    books.forEach(book => {
                        const progress = readingProgress[book.id] || 0;
                        if (progress > maxProgress) {
                            maxProgress = progress;
                            mostPopularBook = book;
                        }
                    });
                    
                    // Count books by genre
                    const genreCounts = {};
                    books.forEach(book => {
                        genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1;
                    });
                    
                    // Find top genre
                    let topGenre = '';
                    let maxCount = 0;
                    for (const [genre, count] of Object.entries(genreCounts)) {
                        if (count > maxCount) {
                            maxCount = count;
                            topGenre = genre;
                        }
                    }
                    
                    // Calculate engagement
                    const totalBooks = books.length;
                    const booksStarted = Object.keys(readingProgress).length;
                    const engagementRate = (booksStarted / totalBooks) * 100;
                    
                    const templateIndex = Math.floor(Math.random() * aiResponses.librarian.length);
                    let response = aiResponses.librarian[templateIndex];
                    
                    if (templateIndex === 0) {
                        response = response.replace('%s', mostPopularBook.title).replace('%d', Math.round(maxProgress));
                    } else if (templateIndex === 1) {
                        response = response.replace('%d', maxCount).replace('%s', topGenre).replace('%s', mostPopularBook.title).replace('%.1f', mostPopularBook.rating);
                    } else {
                        response = response.replace('%.1f', engagementRate).replace('%s', topGenre);
                    }
                    
                    return response;
                }
            }
            
            // Check for greeting
            if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('greetings')) {
                return aiResponses.greeting[Math.floor(Math.random() * aiResponses.greeting.length)];
            }
            
            // Check for recommendation request
            if (query.includes('recommend') || query.includes('suggest') || query.includes('what should i read')) {
                // Find a book based on user's reading history or preferences
                let recommendedBook;
                
                // If user has reading history, recommend based on that
                if (Object.keys(readingProgress).length > 0) {
                    // Get a random book from the user's most read genre
                    const genreCounts = {};
                    Object.keys(readingProgress).forEach(bookId => {
                        const book = books.find(b => b.id == bookId);
                        if (book) {
                            genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1;
                        }
                    });
                    
                    // Find most read genre
                    let topGenre = '';
                    let maxCount = 0;
                    for (const [genre, count] of Object.entries(genreCounts)) {
                        if (count > maxCount) {
                            maxCount = count;
                            topGenre = genre;
                        }
                    }
                    
                    // Get books from that genre
                    const genreBooks = books.filter(book => book.genre === topGenre && !(readingProgress[book.id] && readingProgress[book.id] >= 100));
                    if (genreBooks.length > 0) {
                        recommendedBook = genreBooks[Math.floor(Math.random() * genreBooks.length)];
                    }
                }
                
                // If no reading history or no books in preferred genre, recommend a random book
                if (!recommendedBook) {
                    const unreadBooks = books.filter(book => !readingProgress[book.id] || readingProgress[book.id] < 100);
                    if (unreadBooks.length > 0) {
                        recommendedBook = unreadBooks[Math.floor(Math.random() * unreadBooks.length)];
                    } else {
                        recommendedBook = books[Math.floor(Math.random() * books.length)];
                    }
                }
                
                const templateIndex = Math.floor(Math.random() * aiResponses.recommendation.length);
                let response = aiResponses.recommendation[templateIndex];
                
                if (templateIndex === 0) {
                    response = response.replace('%s', recommendedBook.title).replace('%s', recommendedBook.genre).replace('%s', recommendedBook.author);
                } else if (templateIndex === 1 && Object.keys(readingProgress).length > 0) {
                    const lastReadBookId = Object.keys(readingProgress).sort((a, b) => {
                        return new Date(readingProgress[b]) - new Date(readingProgress[a]);
                    })[0];
                    const lastReadBook = books.find(book => book.id == lastReadBookId);
                    if (lastReadBook) {
                        response = response.replace('%s', recommendedBook.title).replace('%s', lastReadBook.title);
                    } else {
                        response = response.replace('%s', recommendedBook.title).replace('%s', "similar books");
                    }
                } else {
                    response = response.replace('%s', recommendedBook.title).replace('%.1f', recommendedBook.rating).replace('%s', recommendedBook.genre);
                }
                
                return response;
            }
            
            // Check for search request
            if (query.includes('search') || query.includes('find') || query.includes('look for')) {
                // Extract search term (simplified)
                let searchTerm = query.replace(/^(search|find|look for)\s*/i, '').trim();
                
                // If no specific term, use a general one
                if (!searchTerm) {
                    searchTerm = 'books';
                }
                
                // Find matching books
                const matchingBooks = books.filter(book => 
                    book.title.toLowerCase().includes(searchTerm) || 
                    book.author.toLowerCase().includes(searchTerm) ||
                    book.genre.toLowerCase().includes(searchTerm) ||
                    book.description.toLowerCase().includes(searchTerm)
                );
                
                const templateIndex = Math.floor(Math.random() * aiResponses.search.length);
                const response = aiResponses.search[templateIndex].replace('%d', matchingBooks.length).replace('%s', searchTerm);
                
                // Also update the search box and filter
                searchInput.value = searchTerm;
                filterBooks();
                
                return response;
            }
            
            // General questions
            if (query.includes('how') || query.includes('what') || query.includes('why') || query.includes('?')) {
                const templateIndex = Math.floor(Math.random() * aiResponses.question.length);
                const generalIndex = Math.floor(Math.random() * aiResponses.general.length);
                return aiResponses.question[templateIndex].replace('%s', aiResponses.general[generalIndex]);
            }
            
            // Default response
            const generalIndex = Math.floor(Math.random() * aiResponses.general.length);
            return aiResponses.general[generalIndex];
        }

        // Toggle theme
        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            if (document.body.classList.contains('dark-theme')) {
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        }

        // Toggle high contrast mode
        function toggleHighContrast() {
            document.body.classList.toggle('high-contrast');
            if (document.body.classList.contains('high-contrast')) {
                localStorage.setItem('contrast', 'high');
            } else {
                localStorage.setItem('contrast', 'normal');
            }
        }

        // Toggle librarian mode
        function toggleLibrarianMode() {
            isLibrarianMode = !isLibrarianMode;
            if (isLibrarianMode) {
                librarianToggle.textContent = 'Exit Librarian Mode';
                librarianToggle.style.backgroundColor = '#e53e3e';
                addMessage("Librarian mode activated. You can now ask about inventory, popular books, and reader analytics.", 'ai');
            } else {
                librarianToggle.textContent = 'Librarian Mode';
                librarianToggle.style.backgroundColor = '';
                addMessage("Librarian mode deactivated. I'm now back to assisting with general book queries.", 'ai');
            }
        }

        // Load reading progress from localStorage
        function loadReadingProgress() {
            const savedProgress = localStorage.getItem('readingProgress');
            if (savedProgress) {
                readingProgress = JSON.parse(savedProgress);
            }
            
            // Update progress bars in book grid
            books.forEach(book => {
                const progress = readingProgress[book.id] || 0;
                const bookCard = document.querySelector(`.book-card[data-id="${book.id}"]`);
                if (bookCard) {
                    const progressBar = bookCard.querySelector('.progress-bar');
                    if (progressBar) {
                        progressBar.style.width = `${progress}%`;
                    }
                    
                    const progressText = bookCard.querySelector('.book-info p:last-child');
                    if (progressText) {
                        if (progress >= 100) {
                            progressText.textContent = 'Completed';
                        } else {
                            progressText.textContent = `${Math.round(progress)}% read`;
                        }
                    }
                }
            });
        }

        // Show personalized recommendations
        function showRecommendations() {
            // Sort books by rating and filter out completed books
            const unreadBooks = books.filter(book => !readingProgress[book.id] || readingProgress[book.id] < 100);
            const sortedBooks = unreadBooks.sort((a, b) => b.rating - a.rating);
            
            // If user has reading history, prioritize books from preferred genres
            if (Object.keys(readingProgress).length > 0) {
                const genreCounts = {};
                Object.keys(readingProgress).forEach(bookId => {
                    const book = books.find(b => b.id == bookId);
                    if (book) {
                        genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1;
                    }
                });
                
                // Find most read genre
                let topGenre = '';
                let maxCount = 0;
                for (const [genre, count] of Object.entries(genreCounts)) {
                    if (count > maxCount) {
                        maxCount = count;
                        topGenre = genre;
                    }
                }
                
                // Sort by genre first, then rating
                sortedBooks.sort((a, b) => {
                    if (a.genre === topGenre && b.genre !== topGenre) return -1;
                    if (a.genre !== topGenre && b.genre === topGenre) return 1;
                    return b.rating - a.rating;
                });
            }
            
            renderBooks(sortedBooks.slice(0, 10));
            
            // Add AI recommendation message
            setTimeout(() => {
                addMessage("Here are some personalized recommendations based on your reading history and preferences. I've prioritized highly-rated books from genres you've shown interest in.", 'ai');
            }, 500);
        }

        // Load saved theme and contrast settings
        function loadSettings() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-theme');
                themeToggle.textContent = '☀️';
            }
            
            const savedContrast = localStorage.getItem('contrast');
            if (savedContrast === 'high') {
                document.body.classList.add('high-contrast');
            }
        }

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            loadSettings();
            init();
        });