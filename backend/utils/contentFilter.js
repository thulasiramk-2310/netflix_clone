// Content filtering utility to block inappropriate content
// This provides an additional layer of protection beyond TMDB's include_adult=false parameter

const BLOCKED_KEYWORDS = [
    // Japanese adult film related terms - specifically targeting Japanese content
    'av', 'jav', 'gravure', 'pink film', 'roman porno',
    
    // Japanese adult film studio/series names and specific titles
    'toruko', 'maruhi', 'saizensen', 'mitsugi', 'glamorous tides', 'hikaru nagi',
    
    // Generic adult content that's clearly inappropriate
    'xxx', 'porn', 'adult film', 'erotic film', 'nude', 'naked',
    '18+', 'adults only', 'mature content',
    
    // Generic inappropriate terms that are clearly adult
    'strip', 'escort', 'playboy', 'penthouse', 'hustler'
];

// Whitelist for legitimate movies that should NOT be filtered
const WHITELISTED_TITLES = [
    '96', 'meiyazhagan', 'meiyalgan', 'ponniyin selvan', 'kgf', 'baahubali',
    'pushpa', 'rrr', 'vikram', 'beast', 'doctor', 'master', 'bigil',
    'sarkar', 'mersal', 'theri', 'kabali', 'kaala', '2.0', 'enthiran',
    'indian', 'gentleman', 'annamalai', 'baasha', 'muthu', 'padayappa'
];

// Languages to block completely
const BLOCKED_LANGUAGES = [
    'ja', // Japanese
    'ko', // Korean
    'zh', // Chinese (Mandarin)
    'cn', // Chinese (alternative code)
    'zh-CN', // Chinese Simplified
    'zh-TW', // Chinese Traditional
    'zh-HK'  // Chinese Hong Kong
];

// Languages to always allow (Tamil and other Indian languages)
const ALWAYS_ALLOWED_LANGUAGES = [
    'ta', // Tamil
    'hi', // Hindi
    'te', // Telugu
    'ml', // Malayalam
    'kn', // Kannada
    'bn', // Bengali
    'pa', // Punjabi
    'mr', // Marathi
    'gu', // Gujarati
    'or', // Odia
    'as', // Assamese
    'ur'  // Urdu
];

export function filterInappropriateContent(movies) {
    if (!movies || !Array.isArray(movies)) {
        return [];
    }

    return movies.filter(movie => {
        // Skip if marked as adult
        if (movie.adult === true) {
            return false;
        }

        const title = (movie.title || movie.name || '').toLowerCase();
        const overview = (movie.overview || '').toLowerCase();
        const originalTitle = (movie.original_title || movie.original_name || '').toLowerCase();
        const originalLanguage = (movie.original_language || '').toLowerCase();

        // Check if it's a whitelisted Tamil movie (should ALWAYS be allowed)
        const isWhitelisted = WHITELISTED_TITLES.some(whitelistedTitle => 
            title.includes(whitelistedTitle.toLowerCase()) || 
            originalTitle.includes(whitelistedTitle.toLowerCase())
        );

        if (isWhitelisted) {
            console.log(`Allowing whitelisted movie: ${title || originalTitle}`);
            return true;
        }

        // Allow all movies in always allowed languages (Tamil, Hindi, etc.)
        if (ALWAYS_ALLOWED_LANGUAGES.includes(originalLanguage)) {
            console.log(`Allowing movie in permitted language (${originalLanguage}): ${title || originalTitle}`);
            return true;
        }

        // Block movies from banned languages (Japanese, Korean, Chinese)
        if (BLOCKED_LANGUAGES.includes(originalLanguage)) {
            console.log(`Blocked movie from banned language (${originalLanguage}): ${title || originalTitle}`);
            return false;
        }

        // For any remaining movies, check for explicit adult content keywords
        const explicitAdultKeywords = ['xxx', 'porn', 'adult film', 'erotic film', '18+', 'adults only'];
        const hasExplicitAdultKeywords = explicitAdultKeywords.some(keyword => 
            title.includes(keyword.toLowerCase()) || 
            originalTitle.includes(keyword.toLowerCase()) ||
            overview.includes(keyword.toLowerCase())
        );

        if (hasExplicitAdultKeywords) {
            console.log(`Filtered out explicit adult content: ${title || originalTitle}`);
            return false;
        }

        // Allow all other movies that don't match the blocked criteria
        return true;
    });
}

export function filterSingleContent(content) {
    if (!content) return null;
    
    const filtered = filterInappropriateContent([content]);
    return filtered.length > 0 ? filtered[0] : null;
}