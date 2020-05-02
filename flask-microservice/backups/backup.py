from datetime import date
import os
import urllib.request as request

CONFIRMED_URL = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
DEATHS_URL = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"
RECOVERED_URL = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv"

ABSOLUTE_PATH = "/Users/sashaobucina/repos/coding_projects/coronatracker/flask-microservice/backups"

def backup(url):
  # get current date
  curr_date = date.today().strftime("%Y-%m-%d")
  curr_time = date.today().strftime("%Y-%m-%d %H:%M:%S") 

  # request data for confirmed and deaths
  print(f"{curr_time}: Requesting data from {url}...")
  response = request.urlopen(url)

  if response.status != 200:
    print(f"Was not able to access {url} - Status code {response.status}")
    exit(1)

  response_str = response.read().decode("utf")

  # create directory w/ current date if not present already
  dir_name = os.path.join(ABSOLUTE_PATH, curr_date)
  if not os.path.exists(dir_name):
    os.makedirs(dir_name)

  # save requested files to directory (overwrite if needed)
  file_name = url.split("/")[-1]
  full_path = os.path.join(dir_name, file_name)
  with open(full_path, "w+") as f:
    print(f"Writing data for {curr_date} to {full_path}")
    f.write(response_str)

if __name__ == "__main__":
  for url in [CONFIRMED_URL, DEATHS_URL, RECOVERED_URL]:
    backup(url)
  print()