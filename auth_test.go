package main

import "testing"

func TestAuth(t *testing.T) {
	if !auth() { t.Fatal() }
}
