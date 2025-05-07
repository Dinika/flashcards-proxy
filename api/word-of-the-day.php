<?php

// This script fetches the word of the day from the Wordnik API and returns it as a JSON response.
header('Content-Type: application/json');

$apiKey = getenv("WORDNIK_API_KEY");

if (!$apiKey) {
    http_response_code(500);
    echo json_encode(['error' => 'API key not set']);
    exit;
}

$url = "https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=$apiKey";
$response = file_get_contents($url);

if ($response === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch word of the day']);
    exit;
}

echo $response;
?>