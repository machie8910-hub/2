// Video Playlist Data
const videos = [
    // Takagi Episodes
    {
        title: 'Takagi 3D Animation - Episode 1',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
        description: 'Anime 3D berkualitas tinggi dari seri Takagi. Takagi yang cerdas dan nakal dalam petualangan baru. Episode pertama dengan animasi stunning dan karakter yang ekspresif.',
        views: 2500000,
        likes: 180000,
        duration: '24:00',
        character: 'Takagi'
    },
    {
        title: 'Takagi 3D Animation - Episode 2',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
        description: 'Lanjutan dari Takagi episode 1. Pertarungan seru dan candaan yang membuat tertawa. Kualitas animasi 3D yang luar biasa dengan detail yang sempurna.',
        views: 1800000,
        likes: 150000,
        duration: '24:00',
        character: 'Takagi'
    },
    {
        title: 'Takagi 3D Animation - Episode 3',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
        description: 'Penutupan dari trilogy Takagi dengan plot twist yang mengejutkan. Animasi 3D dengan efek visual yang memukau dan soundtrack yang epik.',
        views: 1500000,
        likes: 120000,
        duration: '24:00',
        character: 'Takagi'
    },
    // Chii Episodes
    {
        title: 'Chii 3D Animation - Episode 1',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
        description: 'Chii dari Chobits dalam versi 3D yang menakjubkan. Android cantik yang belajar tentang emosi manusia. Episode pertama dengan visual yang indah dan cerita yang menyentuh hati.',
        views: 2200000,
        likes: 160000,
        duration: '24:00',
        character: 'Chii'
    },
    {
        title: 'Chii 3D Animation - Episode 2',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
        description: 'Chii terus belajar dan berkembang dalam petualangan barunya. Animasi 3D yang detail dengan ekspresi wajah yang natural dan gerakan yang smooth.',
        views: 1700000,
        likes: 140000,
        duration: '24:00',
        character: 'Chii'
    },
    {
        title: 'Chii 3D Animation - Episode 3',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
        description: 'Penutupan Chii trilogy dengan ending yang romantis. Animasi 3D berkualitas sinematik dengan efek lighting yang realistis.',
        views: 1400000,
        likes: 110000,
        duration: '24:00',
        character: 'Chii'
    },
    // Bunny Bars
    {
        title: 'Bunny Bars Animation - Part 1',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
        description: 'Animasi 3D featuring karakter bunny yang sangat lucu. Aksi yang penuh humor dan grafis yang memukau. Part pertama dari serial pendek yang entertaining.',
        views: 3100000,
        likes: 220000,
        duration: '12:30',
        character: 'Bunny'
    },
    {
        title: 'Bunny Bars Animation - Part 2',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
        description: 'Lanjutan petualangan bunny dengan efek visual yang semakin spektakuler. Animasi 3D dengan particle effects yang menakjubkan.',
        views: 2800000,
        likes: 200000,
        duration: '12:30',
        character: 'Bunny'
    },
    {
        title: 'Bunny Bars Animation - Part 3',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
        description: 'Penutupan Bunny Bars dengan aksi final yang spektakuler. Animasi 3D dengan kualitas profesional dan creative storytelling.',
        views: 2500000,
        likes: 180000,
        duration: '12:30',
        character: 'Bunny'
    },
    // Anya Episodes
    {
        title: 'Anya 3D Animation - Episode 1',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
        description: 'Anya dari Spy x Family dalam animasi 3D yang keren. Karakter telepath yang misterius dan penuh kejutan. Episode pertama dengan visual futuristik dan cerita yang menarik.',
        views: 4200000,
        likes: 280000,
        duration: '24:00',
        character: 'Anya'
    },
    {
        title: 'Anya 3D Animation - Episode 2',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
        description: 'Anya menggunakan kemampuan telepatinya dalam misi spionase yang seru. Animasi 3D dengan special effects yang mengesankan.',
        views: 3800000,
        likes: 260000,
        duration: '24:00',
        character: 'Anya'
    },
    {
        title: 'Anya 3D Animation - Episode 3',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
        description: 'Penutupan Anya trilogy dengan revelation yang mengejutkan. Animasi 3D berkualitas premium dengan cinematography yang profesional.',
        views: 3500000,
        likes: 240000,
        duration: '24:00',
        character: 'Anya'
    }
];

// DOM Elements
const videoPlayer = document.getElementById('videoPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const videoTitle = document.getElementById('videoTitle');
const videoDescription = document.getElementById('videoDescription');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializePlayer();
    setupEventListeners();
});

// Initialize Player
function initializePlayer() {
    playBtn.style.backgroundColor = '#ff1744';
    if (videos.length > 0) {
        loadVideoInfo(0);
    }
}

// Setup Event Listeners
function setupEventListeners() {
    playBtn.addEventListener('click', () => {
        videoPlayer.play();
        updateButtonStates();
    });

    pauseBtn.addEventListener('click', () => {
        videoPlayer.pause();
        updateButtonStates();
    });

    fullscreenBtn.addEventListener('click', toggleFullscreen);
    videoPlayer.addEventListener('play', updateButtonStates);
    videoPlayer.addEventListener('pause', updateButtonStates);
    videoPlayer.addEventListener('ended', playNextVideo);

    document.addEventListener('keydown', handleKeyboardShortcuts);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#player') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-in';
            }
        });
    });

    document.querySelectorAll('.anime-card, .playlist-item').forEach(el => {
        observer.observe(el);
    });
}

// Update Button States
function updateButtonStates() {
    if (videoPlayer.paused) {
        playBtn.style.backgroundColor = '#ff1744';
        pauseBtn.style.backgroundColor = '#666';
    } else {
        playBtn.style.backgroundColor = '#666';
        pauseBtn.style.backgroundColor = '#ff1744';
    }
}

// Play Next Video
function playNextVideo() {
    const currentIndex = videos.findIndex(v => v.url === videoPlayer.src);
    if (currentIndex < videos.length - 1) {
        playVideo(currentIndex + 1);
    }
}

// Toggle Fullscreen
function toggleFullscreen() {
    const elem = videoPlayer;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

// Load Video Information
function loadVideoInfo(index) {
    if (index >= 0 && index < videos.length) {
        const video = videos[index];
        videoPlayer.src = video.url;
        videoTitle.textContent = video.title;
        videoDescription.textContent = video.description;

        document.querySelector('.video-stats').innerHTML = `
            <span class="stat">👁️ ${formatNumber(video.views)} Views</span>
            <span class="stat">👍 ${formatNumber(video.likes)} Likes</span>
            <span class="stat">💬 ${formatNumber(Math.floor(video.likes * 0.3))} Komentar</span>
        `;

        document.querySelector('.video-meta').innerHTML = `
            <span class="meta-item">⏱️ ${video.duration}</span>
            <span class="meta-item">📺 1080p HD</span>
            <span class="meta-item">⭐ Rating: ${(4.5 + Math.random() * 0.5).toFixed(1)}/5</span>
        `;

        videoPlayer.play();
        updateButtonStates();
        document.querySelector('.player-section').scrollIntoView({ behavior: 'smooth' });
    }
}

// Play Video Function
function playVideo(index) {
    loadVideoInfo(index);
}

// Format Number
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Handle Keyboard Shortcuts
function handleKeyboardShortcuts(e) {
    if (e.target === document.body || e.target === videoPlayer) {
        switch(e.key.toLowerCase()) {
            case ' ':
                e.preventDefault();
                if (videoPlayer.paused) {
                    videoPlayer.play();
                } else {
                    videoPlayer.pause();
                }
                break;
            case 'f':
                e.preventDefault();
                toggleFullscreen();
                break;
            case 'arrowleft':
                e.preventDefault();
                videoPlayer.currentTime = Math.max(0, videoPlayer.currentTime - 5);
                showNotification('⏪ Rewind 5s');
                break;
            case 'arrowright':
                e.preventDefault();
                videoPlayer.currentTime = Math.min(videoPlayer.duration, videoPlayer.currentTime + 5);
                showNotification('⏩ Forward 5s');
                break;
            case 'arrowup':
                e.preventDefault();
                videoPlayer.volume = Math.min(videoPlayer.volume + 0.1, 1);
                showNotification(`🔊 Volume: ${Math.round(videoPlayer.volume * 100)}%`);
                break;
            case 'arrowdown':
                e.preventDefault();
                videoPlayer.volume = Math.max(videoPlayer.volume - 0.1, 0);
                showNotification(`🔉 Volume: ${Math.round(videoPlayer.volume * 100)}%`);
                break;
            case 'm':
                e.preventDefault();
                videoPlayer.muted = !videoPlayer.muted;
                showNotification(videoPlayer.muted ? '🔇 Muted' : '🔊 Unmuted');
                break;
        }
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: rgba(0,0,0,0.9);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: bold;
        z-index: 1000;
        animation: slideInUp 0.3s ease;
        pointer-events: none;
        border: 1px solid rgba(255, 23, 68, 0.5);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Console Info
console.log('%c🎨 AnimeHub 3D - Premium Anime Streaming', 'color: #ff1744; font-size: 16px; font-weight: bold;');
console.log('%c⌨️ Keyboard Shortcuts:', 'color: #ff1744; font-weight: bold;');
console.log('SPACE - Play/Pause');
console.log('F - Fullscreen');
console.log('← - Rewind 5s');
console.log('→ - Forward 5s');
console.log('↑ - Volume Up');
console.log('↓ - Volume Down');
console.log('M - Mute/Unmute');
console.log('%c📊 Total Videos: ' + videos.length, 'color: #ff1744; font-weight: bold;');
console.log('%c📺 Series: Takagi (3) | Chii (3) | Bunny Bars (3) | Anya (3)', 'color: #ff1744; font-weight: bold;');