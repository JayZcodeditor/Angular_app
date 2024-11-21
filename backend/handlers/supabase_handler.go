package handlers

import (
	"encoding/json"
	"fmt"
	"my-backend/config"
	"net/http"

	"github.com/supabase-community/postgrest-go"
)

var client *postgrest.Client

// InitSupabase: Initialize Supabase client
func InitSupabase() {
	client = postgrest.NewClient(config.SupabaseURL, config.SupabaseKey, nil)
	fmt.Println("Supabase client initialized")
}

// GetData: ดึงข้อมูลจาก user_data table
func GetData(w http.ResponseWriter, r *http.Request) {
	// ใช้ Select พร้อม arguments ทั้ง 3 ตัว
	response, count, err := client.From("user_data").Select("*", "", false).Execute()
	if err != nil {
		http.Error(w, "Failed to fetch data from Supabase: "+err.Error(), http.StatusInternalServerError)
		return
	}

	// แปลงข้อมูลจาก response ให้อยู่ในรูป JSON ที่เข้าใจง่าย
	var data []map[string]interface{}
	if err := json.Unmarshal(response, &data); err != nil {
		http.Error(w, "Failed to parse data: "+err.Error(), http.StatusInternalServerError)
		return
	}

	// แสดงจำนวนแถวที่ดึงข้อมูลได้ (optional)
	fmt.Printf("Fetched %d rows from user_data table\n", count)

	// ตั้งค่า Header และส่งข้อมูลกลับ
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data)
}
