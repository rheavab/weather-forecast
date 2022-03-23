//Complete the Weather API Backend part using openweathermap api
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Weather app</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div class="app-wrap">
      <header>
        <input
          type="text"
          autocomplete="on"
          class="search-box"
          placeholder="Search for a city..."
        />
        <button class="search">Search</button>
      </header>
      <main>
        <section class="location">
          <div class="city"></div>
          <div class="date"></div>
        </section>
        <div class="current">
          <div class="temp"></div>
          <div class="weather"></div>
          <div class="high-low"></div>
        </div>
      </main>
    </div>
    <script src="weather.js"></script>
  </body>
</html>
