package main

import (
	"fmt"
	"my-backend/handlers"
	"net/http"
)

func main() {
	// Start Server
	fmt.Println("Server running on port 8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Printf("Error starting server: %v\n", err)
	}

	// Initialize Supabase client
	handlers.InitSupabase()

	// Route สำหรับ API
	http.HandleFunc("/data", handlers.GetData)

}
