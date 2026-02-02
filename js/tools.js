// --- loc ---
const BIN_ID = "6960ab9d43b1c97be923b2dd";

const API_KEY =
  "$2a$10$" +
  "FCZs3q0UrVn3ftm8i8x5t." +
  "J7uhYK1gkrozCVhKbUNdLM/" +
  "ws0IfM3K";

// --- DATA FROM JSONBIN ---
async function fetchTools() {
  const container = document.getElementById('dynamic-tools-container');

  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: { 'X-Master-Key': API_KEY }
    });

    const data = await response.json();
    renderTools(data.record.sections); // এটা ধরে নিলাম তুমি আগেই renderTools ফাংশন ডিফাইন করেছ
  } catch (error) {
    container.innerHTML = `
      <div style="color:var(--primary); text-align:center; padding: 40px; font-family: 'JetBrains Mono'; border: 1px solid #222;">
        [!] ERROR: FAILED TO LOAD SYSTEM DATA
      </div>`;
    console.error(error);
  }
}

// Automatically call fetchTools when script loads
document.addEventListener("DOMContentLoaded", fetchTools);
