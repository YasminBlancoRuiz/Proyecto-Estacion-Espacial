import time

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import Select

driver=webdriver.Chrome(executable_path="C:\Drivers\chromedriver.exe")
#driver=webdriver.Firefox(executable_path="C:\Drivers\geckodriver.exe")


chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

driver.get("http://localhost:4200/crear")
driver.maximize_window()
#driver.implicitly_wait(10)
t=.100



driver.find_element(By.XPATH, "//input[contains(@id,'nombre')]").send_keys("Venus XIXO" + Keys.TAB )
time.sleep(t)
driver.find_element(By.XPATH, "//input[contains(@id,'pais')]").send_keys("Colombia" + Keys.TAB )

driver.find_element(By.ID, "dropdown").click()
time.sleep(t)
driver.find_element(By.ID, "1").click()
time.sleep(t)
driver.find_element(By.XPATH, "//input[contains(@id,'potencia')]").send_keys("5000" + Keys.TAB )
time.sleep(t)
driver.find_element(By.XPATH, "//input[contains(@id,'toneladasEmpuje')]").send_keys("3000" + Keys.TAB )
time.sleep(t)
driver.find_element(By.XPATH, "//input[contains(@id,'toneladasPeso')]").send_keys("2500" + Keys.TAB )
time.sleep(t)
driver.find_element(By.XPATH, "//input[contains(@id,'altura')]").send_keys("80" + Keys.TAB )
time.sleep(t)
driver.find_element(By.XPATH, "//input[contains(@id,'capacidadToneladas')]").send_keys("6000" + Keys.TAB )
time.sleep(t)
time.sleep(5)
driver.find_element(By.ID, "crear").click()









time.sleep(t)

'''
driver.close()
'''

