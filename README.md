

# 8 Puzzle Game

A simple Node.js web application that implements the 8 Puzzle game using EJS (Embedded JavaScript) for templating.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [How to Play](#how-to-play)
- [Rules](#rules)
- [Contributing](#contributing)
- [License](#license)

## Description

This Node.js project demonstrates the use of EJS (Embedded JavaScript) as a templating engine to create a web-based 8 Puzzle game. EJS allows you to embed JavaScript code within HTML templates, making it easy to render dynamic content.

## Features

- EJS templates for rendering dynamic game tiles.
- Shuffle and solve the 8 Puzzle game interactively in the browser.
- Check for a win condition and display a congratulatory message.

## Requirements

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)

## Installation

1. Clone the repository to your local machine:

   ```bash
   https://github.com/ReyKan-KP/8-Puzzle.git
   ```

2. Navigate to the project directory:

   ```bash
   cd 8-Puzzle
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the application:

   ```bash
   node 8_Puzzle.js
   ```

2. Open your web browser and go to `http://localhost:3000` to play the 8 Puzzle game.

3. Click on the tiles to move them and solve the puzzle.

4. The game will automatically check for a win condition and display a congratulatory message when you win.

## How to Play

The 8 Puzzle game is played on a 3x3 grid with eight numbered tiles and one empty space. The objective is to rearrange the tiles from their shuffled state to their sequential order.

- Click on a tile adjacent to the empty space to move it into the empty space.
- Continue moving tiles to arrange them in ascending order.

## Rules

Here are the rules for the 8 Puzzle game:

1. You can only move tiles that are adjacent to the empty space.
2. Tiles can be moved vertically or horizontally into the empty space.
3. The game is won when the tiles are arranged in sequential order with the empty space in the bottom right corner.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add feature or fix"
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request to the main repository, describing your changes and why they should be merged.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README.md template now includes how to play the 8 Puzzle game and the rules for playing it. Customize the README.md as needed for your project, replacing placeholders like `yourusername` and `feature-name` with actual values.
