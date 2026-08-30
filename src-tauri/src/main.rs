// Copyright (C) 2026 Isabella Katalina Peña Marín
//
// This program is Open Source: you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// any later version.

// WARNING: Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    study_hub_lib::run()
}
