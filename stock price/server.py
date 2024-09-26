from flask import Flask, render_template
import yfinance as yf
import time

app = Flask(__name__)

# Function to fetch live stock data
def get_stock_data(symbol):
    stock = yf.Ticker(symbol)
    stock_data = stock.history(period="1d")
    latest_price = stock_data['Close'].iloc[-1]
    return latest_price

# Function to display stock information
def display_stock_info(symbol, price, previous_price):
    change = "Unchanged"
    if price > previous_price:
        change = f"Increased by: {price - previous_price}"
    elif price < previous_price:
        change = f"Decreased by: {previous_price - price}"
    return {"symbol": symbol, "price": price, "change": change}

# Main route
@app.route('/')
def index():
    symbols = ["AAPL", "GOOGL", "MSFT", "AMZN"]  # Example stock symbols

    stock_info = []

    for symbol in symbols:
        price = get_stock_data(symbol)
        stock_info.append(display_stock_info(symbol, price, 0))  # Pass 0 as previous price for the first time

    return render_template('index.html', stock_info=stock_info)

if __name__ == "__main__":
    app.run(debug=True,port=8080)



# from flask import Flask, render_template, request
# import yfinance as yf
# import time

# app = Flask(__name__)

# # Function to fetch live stock data
# def get_stock_data(symbol):
#     stock = yf.Ticker(symbol)
#     stock_data = stock.history(period="1d")
#     latest_price = stock_data['Close'].iloc[-1]
#     return latest_price

# # Function to calculate percentage change
# def calculate_percentage_change(current_price, previous_price):
#     if previous_price == 0:
#         return 0
#     return ((current_price - previous_price) / previous_price) * 100

# # Function to display stock information
# def display_stock_info(symbol, price, previous_price):
#     change = calculate_percentage_change(price, previous_price)
#     if change > 0:
#         change_str = f"+{change:.2f}%"
#     elif change < 0:
#         change_str = f"{change:.2f}%"
#     else:
#         change_str = "0.00%"
#     return {"symbol": symbol, "price": price, "change": change_str}

# # Main route
# @app.route('/')
# def index():
#     # symbols = ["AAPL", "GOOGL", "MSFT", "AMZN",]  # Example stock symbols
#     symbols = [
#         "AAPL", "GOOGL", "MSFT", "AMZN"]
    
#     page = int(request.args.get('page', 1))  # Get page number from query string, default to 1
#     item_index = page - 1  # Calculate index of item to display based on page number

#     if item_index < len(symbols):
#         symbol = symbols[item_index]
#         price = get_stock_data(symbol)
#         stock_info = display_stock_info(symbol, price, 0)  # Pass 0 as previous price for the first time
#     else:
#         stock_info = None

#     return render_template('index.html', stock_info=stock_info, page=page)

# if __name__ == "__main__":
#     app.run(debug=True)
