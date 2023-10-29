import pandas as pd

def convert_excel_to_json(excel_path, json_path):
    # Parse the HTML content into a DataFrame
    df_html = pd.read_html(excel_path)
    
    # The result is a list of dataframes; taking the first one
    df_parsed = df_html[0]
    
    # Convert the DataFrame to JSON format
    json_data = df_parsed.to_json(orient="records", date_format="iso")
    
    # Saving the JSON data to a file
    with open(json_path, "w") as json_file:
        json_file.write(json_data)

# Usage
excel_path = "ABL_20231028203140.xls"
json_path = "ABL_20231028203140.json"
convert_excel_to_json(excel_path, json_path)
