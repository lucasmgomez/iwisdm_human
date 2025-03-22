import os
import pandas as pd
import numpy as np
import glob
import json

def count_folders(directory):
    """Count the number of folders within the given directory."""
    # List all entries in the directory
    entries = os.listdir(directory)
    # Filter entries to only include folders
    folders = [entry for entry in entries if os.path.isdir(os.path.join(directory, entry))]
    # Return the count of folders
    return folders, len(folders)


def count_png_files(directory):
    """Count the number of PNG files within the given directory."""
    # Build the search pattern to match all .png files in the directory
    search_pattern = os.path.join(directory, '*.png')
    # Use glob to find all files matching the pattern
    png_files = glob.glob(search_pattern)
    # Return the count of PNG files
    return len(png_files)


path2trial_folder = "./for_xx/"

conds = {}
conds["instruction"] = []
conds["action"] = []
max_frames = 0
folders, n_trials = count_folders(path2trial_folder)
for i in range(n_trials):
    path2currtrial = os.path.join(path2trial_folder,folders[i], "frames")
    n_frames = count_png_files( path2currtrial)
    if max_frames < n_frames:
        max_frames = n_frames
print("max_frames:", max_frames)
for i in range(max_frames):
    conds["frame%d"%i] = []

for i in range(n_trials):
    path2currtrial = os.path.join(path2trial_folder, folders[i], "frames")
    path2currtaskinfo = os.path.join(path2currtrial, "task_info.json")
    with open(path2currtaskinfo, 'r') as json_file:
        data = json.load(json_file)
    # Retrieve the 'instruction' attribute
    instruction = data.get('instruction', 'No instruction found')
    conds["instruction"].append(instruction)
    action = data.get("answers", "No answers found")
    conds["action"].append(action[-1])
    n_frames = count_png_files(path2currtrial)
    for j in range(max_frames):
        if j < n_frames:
            conds["frame%d"%j].append(os.path.join(path2currtrial, "epoch%d.png"%j))
        else:
            conds["frame%d"%j].append(os.path.join(path2trial_folder, "nullframe.png"))
conds = pd.DataFrame(conds, )
conds.to_csv("./conditions.csv",index=False)



