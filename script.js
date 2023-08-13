function calculateDamage() {
    const hp = parseInt(document.getElementById('hp').value);
    const level = parseInt(document.getElementById('level').value);
    let result = 0;

    if (level === 1) {
        result = Math.round(0.2 * hp + 120);
    } else if (level === 2) {
        result = Math.round(0.2308 * hp + 230.77);
    } else if (level === 3) {
        result = Math.round(0.2593 * hp + 333.33);
    }

    document.getElementById('result').textContent = `L'ultimate de Garen va tuer la cible avec ${result} HP.`;
}