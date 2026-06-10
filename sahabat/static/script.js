function showMessage() {
    let messages = [
        "🔥 Halo Sahabat!",
        "💬 Fitur berjalan!",
        "🚀 Dibuat pakai Python!",
        "🤝 Sahabat Selamanya!"
    ];

    let random = messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("output").innerHTML = random;
}

function showQuote() {
    document.getElementById("output").innerHTML =
    "🌟 Sahabat sejati bukanlah mereka yang selalu ada di sampingmu, melainkan mereka yang selalu ada di hatimu, meski jarak memisahkan. 💖";
}