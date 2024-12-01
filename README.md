<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SZN.no - Premium Domener</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@600&display=swap" rel="stylesheet">
    <style>
        /* Global Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f9f9f9;
            color: #333;
            overflow-x: hidden;
        }

        /* Navigation Bar */
        nav {
            background-color: #333;
            padding: 20px;
            text-align: center;
            transition: background-color 0.3s ease;
        }

        nav a {
            color: white;
            font-size: 18px;
            text-decoration: none;
            margin: 0 20px;
            text-transform: uppercase;
            font-weight: 600;
            transition: color 0.3s ease;
        }

        nav a:hover {
            color: #FF6A00;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(45deg, #007BFF, #00BFFF);
            color: white;
            text-align: center;
            padding: 80px 20px;
            margin-bottom: 60px;
        }

        .hero h1 {
            font-size: 60px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 24px;
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
            text-align: center;
            padding: 30px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .domain-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .domain-item h2 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 15px;
        }

        .meld-interesse-button {
            background-color: #FF6A00;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .meld-interesse-button:hover {
            background-color: #E55A00;
            transform: translateY(-5px);
        }

        /* Footer */
        footer {
            background-color: #333;
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
</section>

<!-- Domain Listing -->
<main>
    <div class="domain-list">
        <!-- Domain Item 1 -->
        <div class="domain-item">
            <h2>Frakting.no</h2>
            <button class="meld-interesse-button" onclick="sendEmail('Frakting.no')">Meld Interesse</button>
        </div>

        <!-- Domain Item 2 -->
        <div class="domain-item">
            <h2>Databruk.no</h2>
            <button class="meld-interesse-button" onclick="sendEmail('Databruk.no')">Meld Interesse</button>
        </div>

        <!-- Domain Item 3 -->
        <div class="domain-item">
            <h2>Sikkerhetsnett.no</h2>
            <button class="meld-interesse-button" onclick="sendEmail('Sikkerhetsnett.no')">Meld Interesse</button>
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

