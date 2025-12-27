package main

import (
	"html/template"
	"log"
	"net/http"
	"path/filepath"
)

type PageData struct {
	Title       string
	Description string
}

func main() {
	// 静的ファイルの配信
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// ルートハンドラ
	http.HandleFunc("/", homeHandler)

	// サーバー起動
	log.Println("Server starting on http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	data := PageData{
		Title:       "Web Components in Go Template Demo",
		Description: "このデモでは、Goのhtml/template環境で3つの異なるWeb Componentsを使用しています。",
	}

	// テンプレートの解析
	tmpl, err := template.ParseFiles(
		filepath.Join("templates", "layout.html"),
		filepath.Join("templates", "index.html"),
	)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		log.Printf("Template parsing error: %v", err)
		return
	}

	// テンプレートの実行
	if err := tmpl.ExecuteTemplate(w, "layout", data); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		log.Printf("Template execution error: %v", err)
		return
	}
}
