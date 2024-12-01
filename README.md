<!html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SZN.no - Domener til salgs</title>
    <style>
        /* Global Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f7f7f7;
            color: #333;
        }

        header {
            background-color: #FF6A00;
            color: white;
            padding: 40px 0;
            text-align: center;
            position: relative;
        }

        header h1 {
            font-size: 48px;
            font-weight: bold;
        }

        header p {
            font-size: 18px;
            margin-top: 10px;
        }

        /* Smooth Scrolling */
        html {
            scroll-behavior: smooth;
        }

        /* Main Section */
        main {
            padding: 50px 20px;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        h2 {
            font-size: 32px;
            margin-bottom: 40px;
            color: #FF6A00;
            font-weight: bold;
        }

        .domain-list {
            display: flex;
            justify-content: center;
            gap: 40px;
            flex-wrap: wrap;
        }

        /* Domain Card Styling */
        .domain-item {
            background-color: white;
            border: 2px solid #ddd;
            border-radius: 12px;
            padding: 25px;
            width: 250px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .domain-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }

        .domain-name {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #333;
        }

        .buy-button {
            background-color: #FF6A00;
            color: white;
            padding: 14px 28px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            text-transform: uppercase;
            transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .buy-button:hover {
            background-color: #E55A00;
            transform: scale(1.1);
        }

        .sell-button {
            background-color: #333;
            color: white;
            padding: 14px 28px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            text-transform: uppercase;
            margin-top: 30px;
            transition: background-color 0.3s ease;
        }

        .sell-button:hover {
            background-color: #444;
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-content {
            background-color: white;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 50%;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .modal-body {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .modal-button {
            background-color: #FF6A00;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .modal-button:hover {
            background-color: #E55A00;
        }

        /* Background Animation */
        .background-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://www.transparenttextures.com/patterns/diagonal-stripes.png');
            background-size: cover;
            animation: moveBackground 15s linear infinite;
            z-index: -1;
        }

        @keyframes moveBackground {
            0% {
                background-position: 0 0;
            }
            100% {
                background-position: 100% 100%;
            }
        }

        /* Footer */
        footer {
            background-color: #333;
            color: white;
            padding: 20px 0;
            text-align: center;
        }

        footer p {
            font-size: 14px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .domain-item {
                width: 100%;
                margin-bottom: 20px;
            }
        }
    </style>
</head>
<body>

<div class="background-animation"></div>

<header>
    <h1>SZN.no</h1>
    <p>Premium domener til salgs – Kjøp eller selg dine domener</p>
</header>

<main>
    <h2>Domener tilgjengelig for kjøp</h2>
    <div class="domain-list">
        <!-- Domain 1: frakting.no -->
        <div class="domain-item">
            <p class="domain-name">frakting.no</p>
            <button class="buy-button" onclick="openModal('frakting.no')">Kjøp Nå</button>
        </div>
        <!-- Domain 2: databruk.no -->
        <div class="domain-item">
            <p class="domain-name">databruk.no</p>
            <button class="buy-button" onclick="openModal('databruk.no')">Kjøp Nå</button>
        </div>
        <!-- Domain 3: sikkerhetsnett.no -->
        <div class="domain-item">
            <p class="domain-name">sikkerhetsnett.no</p>
            <button class="buy-button" onclick="openModal('sikkerhetsnett.no')">Kjøp Nå</button>
        </div>
    </div>

    <!-- Sell Domain Button -->
    <button class="sell-button" onclick="window.location.href='mailto:kontakt@szn.no?subject=Jeg ønsker å selge et domene&body=Hei, jeg ønsker å selge mitt domene. Vennligst kontakt meg for videre informasjon.'">Selg ditt domene</button>
</main>

<!-- Modal -->
<div id="myModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            Bekreft kjøp
        </div>
        <div class="modal-body">
            Er du sikker på at du ønsker å kjøpe dette domenet? Vi vil kontakte deg på e-post for videre informasjon.
        </div>
        <button class="modal-button" onclick="sendEmail()">Bekreft</button>
        <button class="modal-button" onclick="closeModal()">Lukk</button>
    </div>
</div>

<footer>
    <p>&copy; 2024 SZN.no | Alle rettigheter reservert</p>
</footer>

<script>
    // Modal functionality
    function openModal(domain) {
        document.getElementById("myModal").style.display = "block";
        localStorage.setItem('domainName', domain); // Store domain name for later use
    }

    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    function sendEmail() {
        const domain = localStorage.getItem('domainName');
        window.location.href = `mailto:kontakt@szn.no?subject=Interessert i ${domain}&body=Jeg ønsker å kjøpe ${domain}.`;
        closeModal(); // Close the modal after sending the email
    }
</script>

</body>
</html>

