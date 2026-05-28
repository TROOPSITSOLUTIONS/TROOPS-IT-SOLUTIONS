// GitHub Gist থেকে টুলস লোড করা
const GIST_OWNER = 'TROOPSITSOLUTIONS';
const GIST_ID = '3bfa4b9ca8dbdc1038918d63329096b3';
const GIST_FILE = 'tools.json';
const GIST_RAW_URL = `https://gist.githubusercontent.com/${GIST_OWNER}/${GIST_ID}/raw/${GIST_FILE}`;

async function fetchToolsFromBin() {
    try {
        const response = await fetch(`${GIST_RAW_URL}?t=${Date.now()}`);
        if (!response.ok) throw new Error('Failed to load');
        const data = await response.json();
        
        if (data.tools && data.tools.sections) {
            return data.tools.sections;
        }
        return [];
    } catch(error) {
        console.log('Using fallback tools');
        return [
            {
                section_title: "🔐 SECURITY TOOLS",
                title_color: "#ff0033",
                tools: [
                    { title: "IP Tracker", url: "https://ipinfo.io", icon: "fas fa-map-marker-alt", desc: "Track IP addresses", tag: "POPULAR" }
                ]
            }
        ];
    }
}

window.fetchToolsFromBin = fetchToolsFromBin;
