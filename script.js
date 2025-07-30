// 🔐 Configuración de Seguridad Avanzada
const SECURITY_CONFIG = {
    MAX_DEVICES: 3,
    INACTIVITY_TIMEOUT: 10 * 60 * 1000, // 10 minutos
    CODE_VALIDATION_DELAY: 800, // Retraso anti-fuerza bruta
    SALT: "xQ9#pL2$kM5&vR1" // Sal para hashing
};

// 🏷️ Todos los códigos válidos (antiguos y nuevos)
const VALID_CODES = {
    // Nuevos códigos en formato usuario*clave
    "carlos*1111": true,
    "laura*2112": true,
    "maria*2222": true,
    "juan*3333": true,
    "ana*4444": true,
    
    // Todos los códigos antiguos (4 caracteres)
    "P3L8": true, "M7N2": true, "B4V6": true, "C1F9": true, "D8G3": true,
    "E5H7": true, "F2J1": true, "G9K4": true, "H6L0": true, "J3M7": true,
    "K0N4": true, "L7P1": true, "N4Q8": true, "O1R5": true, "Q8S2": true,
    "R5T9": true, "S2U6": true, "T9V3": true, "U6W0": true, "V3X7": true,
    "W0Y4": true, "Y7Z1": true, "Z4A8": true, "A1B5": true, "B8C2": true,
    "C5X9": true, "D2E6": true, "E9F3": true, "F6G0": true, "G3H7": true,
    "H0I4": true, "I7J1": true, "J4K8": true, "K1L5": true, "L8M2": true,
    "M5N9": true, "N2O6": true, "O9P3": true, "P6Q0": true, "Q3R7": true,
    "R0S4": true, "S7T1": true, "T4U8": true, "U1V5": true, "V8W2": true,
    "W5X9": true, "X2Y6": true, "Y9Z3": true, "Z6A0": true, "A7B1": true,
    "B4C8": true, "C1D5": true, "D8E2": true, "E5F9": true, "F2G6": true,
    "G9H3": true, "H6I0": true, "I3J7": true, "J0K4": true, "K7L1": true,
    "L4M8": true, "M1N5": true, "N8O2": true, "O5P9": true, "P2Q6": true,
    "Q9R3": true, "R6S0": true, "S3T7": true, "T0U4": true, "U7V1": true,
    "V4W8": true, "W1X5": true, "X8Y2": true, "Y5Z9": true, "Z2A6": true,
    "A9B3": true, "B6C0": true, "C3D7": true, "D0E4": true, "E7F1": true,
    "F4G8": true, "G1H5": true, "H8I2": true, "I5J9": true, "J2K6": true,
    "K9L3": true, "L6M0": true, "M3N7": true, "N0O4": true, "O7P1": true,
    "P4Q8": true, "Q1R5": true, "R8S2": true, "S5T9": true, "T2U6": true,
    "U9V3": true, "V6W0": true, "W3X7": true, "X0Y4": true, "Y7Z1": true,
    "Z4A8": true, "R2D7": true, "P9M4": true, "K6T1": true, "F8L3": true,
    "S4W9": true, "Z1X5": true, "V0Q2": true, "N7E8": true, "H2C5": true,
    "B9Y6": true, "D4U7": true, "G0J3": true, "A5O1": true, "W8I4": true,
    "C6K9": true, "M2P5": true, "Q3V0": true, "X7S1": true, "L9N6": true,
    "E1R4": true, "T5H8": true, "O0Z2": true, "I7A3": true, "J4B6": true,
    "U9D0": true, "Y5F1": true, "K2P7": true, "L1Q9": true, "M8R3": true,
    "N5S0": true, "O2T6": true, "P9U1": true, "Q6V2": true, "R3W7": true,
    "S0X4": true, "T7Y1": true, "U4Z8": true, "V1A5": true, "W8B2": true,
    "X5C9": true, "Y2D6": true, "Z9E3": true, "A6F0": true, "B3G7": true,
    "C0H5": true, "D7I2": true, "E4J9": true, "F1K6": true, "G8L3": true,
    "H5M0": true, "I2N7": true, "J9O4": true, "K6P1": true, "L3Q8": true,
    "M0R6": true, "N7S3": true, "O4T0": true, "P1U7": true, "Q8V4": true,
    "R5W0": true, "S2X9": true, "T9Y6": true, "U3Z1": true, "V0A7": true,
    "W7B4": true, "X4C1": true, "Y1D8": true, "Z6E5": true, "A3F0": true,
    "B0G7": true, "C7H4": true, "D4I1": true, "E1J8": true, "F8K5": true,
    "G5L2": true, "H2M9": true, "I9N6": true, "J6O3": true, "K3P0": true,
    "L0Q7": true, "M7R4": true, "N4S1": true, "O1T8": true, "P8U5": true,
    "Q5V2": true, "R2W9": true, "S9X6": true, "T6Y3": true, "U0Z7": true,
    "V7A4": true, "W4B1": true, "X1C8": true, "Y8D5": true, "Z5E2": true,
    "A2F9": true, "B9G6": true, "C6H3": true, "D3I0": true, "E0J7": true,
    "F7K4": true, "G4L1": true, "H1M8": true, "I8N5": true, "J5O2": true,
    "K2P9": true, "L9Q6": true, "M6R3": true, "N3S0": true, "O0T7": true,
    "P7U4": true, "Q4V1": true, "R1W8": true, "S8X5": true, "T5Y2": true,
    "U2Z9": true, "V9A6": true, "W6B3": true, "X3C0": true, "Y0D7": true,
    "Z7E4": true, "A4F1": true, "B1G8": true, "C8H5": true, "D5I2": true,
    "E2J9": true, "F9K6": true, "G6L3": true, "H3M0": true, "I0N7": true,
    "J7O4": true, "K4P1": true, "L1Q8": true, "M8R5": true, "N5S2": true,
    "O2T9": true, "P9U6": true, "Q6V3": true, "R3W0": true, "S0X7": true,
    "T7Y4": true, "U4Z1": true, "V1A8": true, "W8B5": true, "X5C2": true,
    "Y2D9": true, "Z9E6": true, "A6F3": true, "B3G0": true, "D1G5": true,
    "D7I4": true, "E4J1": true, "F1K8": true, "G8L5": true, "H5M2": true,
    "I2N9": true, "J9O6": true, "K6P3": true, "L3Q0": true, "M0R7": true,
    "N7S4": true, "O4T1": true, "P1U8": true, "Q8V5": true, "R5W2": true,
    "S2X9": true, "T9Y6": true, "U3Z3": true, "V0A9": true, "W7B6": true,
    "X4C3": true, "Y1D0": true, "Z6E7": true, "A3F4": true, "B0G1": true,
    "C7H8": true, "D4I5": true, "E1J2": true, "F8K9": true, "G5L6": true,
    "H2M3": true, "I9N0": true, "J6O7": true, "M7R8": true, "N4S5": true,
    "O1T2": true, "P8U9": true, "Q5V6": true, "R2W3": true, "S9X0": true,
    "T6Y7": true, "U0Z4": true, "V7A1": true, "W4B8": true, "X1C5": true,
    "Y8D2": true, "Z5E9": true, "A2F6": true, "B9G3": true, "C6H0": true,
    "D3I7": true, "E0J4": true, "F7K1": true, "G4L8": true, "H1M5": true,
    "I8N2": true, "J5O9": true, "K2P6": true, "L9Q3": true, "M6R0": true,
    "N3S7": true, "O0T4": true, "P7U1": true, "Q4V8": true, "R1W5": true,
    "S8X2": true, "T5Y9": true, "U2Z6": true, "V9A3": true, "W6B0": true,
    "X3C7": true, "Y0D4": true, "Z7E1": true, "A4F8": true, "B1G5": true,
    "C8H2": true, "D5I9": true, "E2J6": true, "F9K3": true, "G6L0": true,
    "H3M7": true, "I0N4": true, "J7O1": true, "K4P8": true, "L1Q5": true,
    "M8R2": true, "N5S9": true, "O2T6": true, "P9U3": true, "Q6V0": true
};

// 🛡️ Sistema de Seguridad Mejorado (clase completa)
class CodeSecuritySystem {
    constructor() {
        this.initSessionProtection();
        this.checkExistingSession();
    }

    generateDeviceId() {
        const storedId = localStorage.getItem('secureDeviceId');
        if (storedId) return storedId;

        const fingerprint = [
            navigator.userAgent,
            navigator.hardwareConcurrency,
            screen.width,
            screen.height,
            navigator.deviceMemory,
            SECURITY_CONFIG.SALT
        ].join('|');

        const deviceId = this.hashString(fingerprint) + '-' + Date.now().toString(36);
        localStorage.setItem('secureDeviceId', deviceId);
        return deviceId;
    }

    hashString(str) {
        let hash = 5381;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 33) ^ str.charCodeAt(i);
        }
        return (hash >>> 0).toString(36);
    }

    getRegisteredDevices(code) {
        const encrypted = localStorage.getItem(`encDevices_${code}`);
        if (!encrypted) return [];

        try {
            const decrypted = this.decryptData(encrypted);
            return JSON.parse(decrypted) || [];
        } catch (e) {
            console.error("Error al decodificar dispositivos:", e);
            return [];
        }
    }

    registerDevice(code) {
        const deviceId = this.generateDeviceId();
        const devices = this.getRegisteredDevices(code);

        if (devices.some(dev => dev.id === deviceId)) {
            return { success: true, isNew: false };
        }

        if (devices.length >= SECURITY_CONFIG.MAX_DEVICES) {
            return { success: false, reason: "Límite de dispositivos alcanzado" };
        }

        devices.push({
            id: deviceId,
            timestamp: Date.now(),
            ua: navigator.userAgent.substring(0, 50)
        });

        localStorage.setItem(`encDevices_${code}`, this.encryptData(JSON.stringify(devices)));
        return { success: true, isNew: true };
    }

    encryptData(data) {
        return btoa(unescape(encodeURIComponent(data + SECURITY_CONFIG.SALT)));
    }

    decryptData(encrypted) {
        try {
            const decoded = decodeURIComponent(escape(atob(encrypted)));
            return decoded.replace(SECURITY_CONFIG.SALT, '');
        } catch (e) {
            console.error("Error al descifrar:", e);
            return '';
        }
    }

    initSessionProtection() {
        const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
        events.forEach(evt => {
            document.addEventListener(evt, this.resetInactivityTimer.bind(this));
        });

        this.resetInactivityTimer();
    }

    resetInactivityTimer() {
        clearTimeout(this.inactivityTimer);
        this.inactivityTimer = setTimeout(() => {
            this.handleInactiveSession();
        }, SECURITY_CONFIG.INACTIVITY_TIMEOUT);
    }

    handleInactiveSession() {
        const currentCode = localStorage.getItem('currentValidCode');
        sessionStorage.removeItem('activeSessionToken');
        
        if (currentCode) {
            window.location.href = window.location.pathname;
        }
    }

    checkExistingSession() {
        const savedCode = localStorage.getItem('currentValidCode');
        const sessionToken = sessionStorage.getItem('activeSessionToken');
        
        if (savedCode && sessionToken) {
            const devices = this.getRegisteredDevices(savedCode);
            const deviceId = this.generateDeviceId();
            
            if (devices.some(dev => dev.id === deviceId)) {
                setTimeout(() => {
                    window.location.href = "https://luishparedes.github.io/magica_pro-web/";
                }, 500);
            }
        }
    }

    validateAccessCode(code) {
        return new Promise(resolve => {
            setTimeout(() => {
                if (!VALID_CODES[code]) {
                    resolve({ valid: false, error: "Credenciales no válidas" });
                    return;
                }

                const registration = this.registerDevice(code);
                if (!registration.success) {
                    resolve({ valid: false, error: registration.reason });
                    return;
                }

                localStorage.setItem('currentValidCode', code);
                sessionStorage.setItem('activeSessionToken', this.hashString(Date.now().toString()));
                
                resolve({ valid: true, isNewDevice: registration.isNew });
            }, SECURITY_CONFIG.CODE_VALIDATION_DELAY);
        });
    }

    getDeviceRegistrationInfo(code) {
        const devices = this.getRegisteredDevices(code);
        const currentDeviceId = this.generateDeviceId();
        
        const isCurrentRegistered = devices.some(dev => dev.id === currentDeviceId);
        const availableSlots = SECURITY_CONFIG.MAX_DEVICES - devices.length;
        
        return {
            isRegistered: isCurrentRegistered,
            registeredDevices: devices.length,
            maxDevices: SECURITY_CONFIG.MAX_DEVICES,
            availableSlots: availableSlots > 0 ? availableSlots : 0
        };
    }
}

// 🚀 Inicialización del Sistema
document.addEventListener('DOMContentLoaded', () => {
    const securitySystem = new CodeSecuritySystem();
    const accessForm = document.getElementById('access-form');
    const codeInput = document.getElementById('code');
    const messageEl = document.getElementById('message');
    const deviceInfoEl = document.getElementById('device-info');

    const savedCode = localStorage.getItem('currentValidCode');
    if (savedCode) {
        codeInput.value = savedCode;
        const info = securitySystem.getDeviceRegistrationInfo(savedCode);
        updateDeviceInfoDisplay(info);
    }

    codeInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z0-9*]/g, '');
        
        if (this.value.length >= (this.value.includes('*') ? 3 : 4)) {
            const info = securitySystem.getDeviceRegistrationInfo(this.value);
            updateDeviceInfoDisplay(info);
        } else {
            deviceInfoEl.textContent = '';
        }
    });

    function updateDeviceInfoDisplay(info) {
        if (!info || info.registeredDevices === 0) {
            deviceInfoEl.textContent = '';
            return;
        }

        if (info.isRegistered) {
            deviceInfoEl.innerHTML = `✅ Este dispositivo está registrado<br>
                                     <small>Dispositivos: ${info.registeredDevices}/${info.maxDevices}</small>`;
            deviceInfoEl.className = 'success';
        } else if (info.availableSlots > 0) {
            deviceInfoEl.innerHTML = `⚠️ Este código tiene ${info.registeredDevices} de ${info.maxDevices} dispositivos<br>
                                     <small>Aún puedes registrar ${info.availableSlots} más</small>`;
            deviceInfoEl.className = 'warning';
        } else {
            deviceInfoEl.innerHTML = `❌ Límite de dispositivos alcanzado<br>
                                     <small>Este código ya tiene ${info.maxDevices} dispositivos registrados</small>`;
            deviceInfoEl.className = 'error';
        }
    }

    accessForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const code = codeInput.value.trim();
        
        // Validación para ambos formatos
        if (code.includes('*')) {
            if (code.split('*').length !== 2 || code.split('*')[0].length < 1 || code.split('*')[1].length < 1) {
                showMessage("❌ Formato incorrecto. Usa: usuario*clave", "error");
                return;
            }
        } else {
            if (code.length !== 4 || !/^[A-Z0-9]{4}$/.test(code)) {
                showMessage("❌ El código debe tener 4 caracteres alfanuméricos", "error");
                return;
            }
        }

        showMessage("🔒 Verificando credenciales...", "info");
        
        const result = await securitySystem.validateAccessCode(code.toUpperCase());
        
        if (result.valid) {
            showMessage("✅ Acceso concedido...", "success");
            setTimeout(() => {
                window.location.href = "https://luishparedes.github.io/magica_pro-web/";
            }, 1500);
        } else {
            showMessage(`❌ ${result.error}`, "error");
        }
    });

    function showMessage(text, type) {
        messageEl.innerHTML = text;
        messageEl.className = type;
    }
});
