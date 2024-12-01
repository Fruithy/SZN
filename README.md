<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SZN.no - Premium Domener</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background-color: #F4F7FA;
            color: #333;
        }

        header {
            background-color: #1D2A3A;
            color: white;
            padding: 50px 0;
            text-align: center;
        }

        header h1 {
            font-size: 48px;
            font-weight: 600;
        }

        header p {
            font-size: 18px;
            margin-top: 10px;
        }

        .domain-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 40px;
            padding: 60px 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .domain-item {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
            text-align: center;
            position: relative;
        }

        .domain-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .domain-image {
            width: 100%;
            height: 150px;
            background-color: #EAEAEA;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .domain-name {
            font-size: 24px;
            font-weight: 600;
            margin: 20px 0;
        }

        .buy-button {
            background-color: #FF6A00;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .buy-button:hover {
            background-color: #E55A00;
        }

        footer {
            background-color: #1D2A3A;
            color: white;
            padding: 30px 0;
            text-align: center;
        }

        footer p {
            font-size: 14px;
        }

        /* Modal styling */
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-content {
            background-color: white;
            margin: 15% auto;
            padding: 20px;
            width: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            text-align: center;
        }

        .modal-button {
            background-color: #FF6A00;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-transform: uppercase;
            font-size: 16px;
        }

        .modal-button:hover {
            background-color: #E55A00;
        }
    </style>
</head>
<body>

<header>
    <h1>SZN.no</h1>
    <p>Premium domener til salgs – Kjøp, invester og bygg din merkevare</p>
</header>

<main>
    <div class="domain-list">
        <!-- Domain Item 1 -->
        <div class="domain-item" onclick="openModal('frakting.no')">
            <div class="domain-image">
                <img src="https://via.placeholder.com/150" alt="Logo" />
            </div>
            <p class="domain-name">frakting.no</p>
            <button class="buy-button">Kjøp Nå</button>
        </div>

        <!-- Domain Item 2 -->
        <div class="domain-item" onclick="openModal('databruk.no')">
            <div class="domain-image">
                <img src="https://via.placeholder.com/150" alt="Logo" />
            </div>
            <p class="domain-name">databruk.no</p>
            <button class="buy-button">Kjøp Nå</button>
        </div>

        <!-- Domain Item 3 -->
        <div class="domain-item" onclick="openModal('sikkerhetsnett.no')">
            <div class="domain-image">
                <img src="https://via.placeholder.com/150" alt="Logo" />
            </div>
            <p class="domain-name">sikkerhetsnett.no</p>
            <button class="buy-button">Kjøp Nå</button>
        </div>
    </div>
</main>

<footer>
    <p>&copy; 2024 SZN.no | Alle rettigheter reservert</p>
</footer>

<!-- Modal -->
<div id="myModal" class="modal">
    <div class="modal-content">
        <h2>Bekreft Kjøp</h2>
        <p>Er du sikker på at du ønsker å kjøpe dette domenet? Vi vil kontakte deg for videre informasjon.</p>
        <button class="modal-button" onclick="sendEmail()">Bekreft Kjøp</button>
        <button class="modal-button" onclick="closeModal()">Lukk</button>
    </div>
</div>

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

