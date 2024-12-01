<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SZN.no - Premium Domener</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        /* Global reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f7f7f7;
            color: #333;
        }

        /* Navigation bar */
        nav {
            background-color: #0a3c73;
            padding: 20px 0;
            text-align: center;
        }

        nav a {
            color: white;
            font-size: 16px;
            text-decoration: none;
            margin: 0 15px;
            padding: 10px 0;
            text-transform: uppercase;
            font-weight: 600;
        }

        nav a:hover {
            border-bottom: 2px solid #ff6a00;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(to right, #007BFF, #00BFFF);
            color: white;
            text-align: center;
            padding: 100px 20px;
            margin-bottom: 50px;
        }

        .hero h1 {
            font-size: 50px;
            font-weight: 700;
        }

        .hero p {
            font-size: 20px;
            margin-top: 10px;
        }

        .cta-button {
            background-color: #FF6A00;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            text-transform: uppercase;
            margin-top: 30px;
            transition: background-color 0.3s ease;
        }

        .cta-button:hover {
            background-color: #E55A00;
        }

        /* Domain Listing */
        .domain-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
            padding: 50px 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .domain-item {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease;
            text-align: center;
        }

        .domain-item:hover {
            transform: translateY(-10px);
        }

        .domain-item img {
            width: 100%;
            height: 150px;
            object-fit: cover;
        }

        .domain-name {
            font-size: 22px;
            font-weight: 600;
            margin: 20px 0;
        }

        .buy-button {
            background-color: #007BFF;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            margin-bottom: 20px;
            transition: background-color 0.3s ease;
        }

        .buy-button:hover {
            background-color: #0056b3;
        }

        /* Footer */
        footer {
            background-color: #0a3c73;
            color: white;
            padding: 30px 0;
            text-align: center;
        }

        footer p {
            font-size: 14px;
        }

        footer a {
            color: #FF6A00;
            text-decoration: none;
        }

        footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<!-- Navigation Bar -->
<nav>
    <a href="#">Hjem</a>
    <a href="#">Tjenester</a>
    <a href="#">Kontakt</a>
</nav>

<!-- Hero Section -->
<section class="hero">
    <h1>Premium Domener Til Salgs</h1>
    <p>Invester i en unik og minneverdig nettadresse for din virksomhet</p>
    <button class="cta-button">Kjøp Domene Nå</button>
</section>

<!-- Domain Listing -->
<main>
    <div class="domain-list">
        <!-- Domain Item 1 -->
        <div class="domain-item">
            <img src="https://via.placeholder.com/500x150" alt="Frakting.no">
            <p class="domain-name">frakting.no</p>
            <button class="buy-button" onclick="sendEmail('frakting.no')">Kjøp Nå</button>
        </div>

        <!-- Domain Item 2 -->
        <div class="domain-item">
            <img src="https://via.placeholder.com/500x150" alt="Databruk.no">
            <p class="domain-name">databruk.no</p>
            <button class="buy-button" onclick="sendEmail('databruk.no')">Kjøp Nå</button>
        </div>

        <!-- Domain Item 3 -->
        <div class="domain-item">
            <img src="https://via.placeholder.com/500x150" alt="Sikkerhetsnett.no">
            <p class="domain-name">sikkerhetsnett.no</p>
            <button class="buy-button" onclick="sendEmail('sikkerhetsnett.no')">Kjøp Nå</button>
        </div>
    </div>
</main>

<!-- Footer -->
<footer>
    <p>&copy; 2024 SZN.no | Alle rettigheter reservert</p>
    <p><a href="#">Personvern</a> | <a href="#">Vilkår og betingelser</a></p>
</footer>

<script>
    function sendEmail(domain) {
        window.location.href = `mailto:kontakt@szn.no?subject=Interessert i ${domain}&body=Jeg ønsker å kjøpe ${domain}.`;
    }
</script>

</body>
</html>


