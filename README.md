# Triangle-Challenge

## Project

### Problem

> Write a program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

> We are looking for simple but good solutions that properly solve the problem. Pay special attention to tests, readability of code and error cases.

### Approach

Besides solving the explicit problem above, the project should demonstrate decision-making skills while demonstrating Fullstack Engineering knowledge and abilities.

1. Conceptual understanding

My geometry was a bit rusty, so the first step was to visit Google. After refreshing some basic concepts from Euclidean geometry, I had a conceptual understanding of the problem and a possible solution.

    given a,b,c
    check if a,b,c forms a valid triangle,
        then determine triangle type

2. Technology stack

A lot of engineering lies in choosing the right tools for the job. I decided to use tools that emphasize speed and flexibility (Python or JavaScript). Since the problem didn't require high numerical precision and I also wanted to demonstrate some Frontend abilities, I choose JavaScript. This isomorphic stack would allow me to easily extend a Node.js app with a web interface, using React.

3. Workflow

I choose to frame the assignment, more as a real-world problem – a moving target, with changing priorities and multiple solutions. From my experience, the best process is iterative with frequent deliveries. With this agile approach, here are the first milestones:

- [x] simple command-line app taking 3 inputs (length of sides: a,b,c) and returning whether the triangle is an equilateral, isosceles or scalene

- [x] simple web-interface with 3 inputs controls and text display for return triangle type

- [x] make web-interface more interactive with a visual display of triangle

- [ ] move visualizations to canvas, to easily extend shapes

- [ ] add TypeScript / Flow and do more rigoures testing of React components

## Usage

### Installation

1. Make sure you've a recent version of Node and NPM installed on your computer
2. cd into the project directory and `npm install` to download required modules

### Run Dev

After installation, start the dev server by running `npm start`. You can now access the web-interface from `http://localhost:3000/` in your browser

### Run Tests

After installation, run the tests by running `npm test`. This will use the local jest installation to run the test environment.

## Disclaimer / Troubleshooting

- I've only tested the web-interface in newer versions of Chrome
