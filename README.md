

# Sum Calculator App

A simple React web app to calculate the sum of two numbers. Supports integer and decimal inputs only.

## Features
- Input two numbers (integer or decimal)
- Strict input validation (rejects invalid formats, e.g. `10a`)
- Displays sum as decimal (rounded to 6 digits)
- Error messages for invalid input

## Example Inputs
| Number 1   | Number 2   | Result |
|------------|------------|--------|
| 1.5        | 2.25       | 3.75   |
| 2          | 3          | 5      |
| 10a        | 2          | (error)|

## Getting Started

### Prerequisites
- Node.js (v14 or newer recommended)
- npm

### Installation
```powershell
cd sum-app
npm install
```

### Running the App
```powershell
npm start
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Running Tests
```powershell
npm test
```

## Project Structure
```
sum-app/
	src/
		components/
			SumCalculator.jsx
		App.jsx
		App.css
		index.html
	package.json
	README.md
```

## License
MIT
