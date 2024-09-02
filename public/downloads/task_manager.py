#python project for practice - resource material: https://www.geeksforgeeks.org/personalized-task-manager-in-python/
#!/usr/bin/env python
import datetime

def home_page(username):
    """Display the home page options and handle user choice."""
    print(f"{username}'s homepage!")
    options = {
        '1': view_data,
        '2': task_information,
        '3': task_update,
        '4': task_update_viewer
    }
    print("1-- View your data\n2-- Add task\n3-- Update task status\n4-- View task status")
    choice = input("Choose an option: ")
    options.get(choice, lambda x: print("Wrong input!"))(username)


def exit_program(username):
    """Exit to home page or quit program based on user choice."""
    choice = input("Press 'C' to go Home, press 'N' to exit the program: ").upper()
    if choice == 'C':
        home_page(username)
    elif choice == 'N':
        quit()
    else:
        print("Please enter the correct input!")
        exit_program(username)


def user_info(username, password):
    """Gather and save user information."""
    name = input("Enter your name: ")
    address = input("Enter your address: ")
    age = input("Enter your age: ")

    with open(f"{username}_task.txt", 'a') as f:
        f.write(f"{password}\nName: {name}\nAddress: {address}\nAge: {age}\n")


def view_data(username):
    """Display user's stored data."""
    try:
        with open(f"{username}_task.txt", 'r') as f:
            print(f.read())
    except FileNotFoundError:
        print("No data found for this user.")
    exit_program(username)


def task_information(username):
    """Allow user to add new tasks."""
    num_tasks = int(input("How many tasks do you want to add? "))
    with open(f"{username}_task.txt", 'a') as f:
        for i in range(1, num_tasks + 1):
            task = input(f"Enter task {i}: ")
            target_date = input(f"Enter the target date for task {i}: ")
            f.write(f"TASK {i}: {task}\nTARGET {i}: {target_date}\n")

            if input("Press 'spacebar' to stop, or press 'enter' to continue: ") == ' ':
                break
    exit_program(username)


def task_update(username):
    """Update the status of tasks."""
    print("Your current tasks: ")
    with open(f"{username}_TASK.txt", 'a+') as f:
        f.seek(3)
        print(f.read())
        f.write(f"{datetime.datetime.now()}\n")
        f.write(f"COMPLETED TASK: {input('Enter the completed tasks: ')}\n")
        f.write(f"ONGOING TASK: {input('Enter the ongoing tasks: ')}\n")
        f.write(f"NOT YET STARTED: {input('Enter the tasks not started: ')}\n")
    exit_program(username)


def task_update_viewer(username):
    """View the status of tasks."""
    try:
        with open(f"{username}_TASK.txt", 'r') as f:
            print(f.read())
    except FileNotFoundError:
        print("No task updates found for this user.")
    exit_program(username)


def login():
    """Handle user login process."""
    username = input("Enter your username: ")
    password = input("Enter your password: ") + '\n'
    
    try:
        with open(f"{username}_task.txt", 'r') as f:
            if password == f.readline():
                home_page(username)
            else:
                print("Incorrect username or password. Please try again.")
                login()
    except FileNotFoundError:
        print("User not found. Please sign up.")
        signup()


def signup():
    """Handle user signup process."""
    username = input("Enter the username for your account: ")
    password = input("Enter a password: ")
    user_info(username, password)
    print("Please proceed to log in.")
    login()


if __name__ == '__main__':
    print("Welcome to the Task Manager!")
    is_new_user = int(input("Type 1 if new, otherwise press 0: "))
    
    if is_new_user == 1:
        signup()
    elif is_new_user == 0:
        login()
    else:
        print("You have provided wrong input!")
