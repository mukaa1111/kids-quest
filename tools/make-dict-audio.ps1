# Makes Korean speech files (wav) for the dictation sentences listed in sounds/dict/list.json.
# Uses the Windows Korean voice "Microsoft Heami". Files that already exist are skipped.
# Run from the kids-quest folder:  powershell -File tools/make-dict-audio.ps1
$root = Split-Path -Parent $PSScriptRoot
$dir = Join-Path $root "sounds\dict"
$list = Get-Content (Join-Path $dir "list.json") -Encoding UTF8 -Raw | ConvertFrom-Json
Add-Type -AssemblyName System.Speech
$s = New-Object System.Speech.Synthesis.SpeechSynthesizer
$voice = $s.GetInstalledVoices() | Where-Object { $_.VoiceInfo.Culture.Name -eq "ko-KR" } | Select-Object -First 1
if ($null -eq $voice) { Write-Output "No Korean voice installed"; exit 1 }
$s.SelectVoice($voice.VoiceInfo.Name)
$s.Rate = -2
$fmt = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(16000, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)
$made = 0; $skipped = 0
foreach ($it in $list) {
  $out = Join-Path $dir $it.file
  if (Test-Path $out) { $skipped++; continue }
  $s.SetOutputToWaveFile($out, $fmt)
  $s.Speak($it.text)
  $made++
}
$s.SetOutputToNull()
$s.Dispose()
# remove wav files that are no longer in the list
$keep = @{}; foreach ($it in $list) { $keep[$it.file] = $true }
$removed = 0
Get-ChildItem $dir -Filter *.wav | ForEach-Object { if (-not $keep.ContainsKey($_.Name)) { Remove-Item $_.FullName -Confirm:$false; $removed++ } }
$size = [math]::Round(((Get-ChildItem $dir -Filter *.wav | Measure-Object Length -Sum).Sum / 1MB), 1)
Write-Output "voice=$($voice.VoiceInfo.Name) made=$made skipped=$skipped removed=$removed total=$($list.Count) size=${size}MB"
# Size budget: keep all dictation audio under 15 MB (16 kHz / 16 bit / mono; 11 kHz blurs s/ch sounds, so do not lower it).
# If this warning shows, make audio only for the current level + review sentences instead of every level (see docs/WEEKLY.md).
if ($size -gt 15) { Write-Output "WARNING: audio is over the 15 MB budget (${size}MB)" }
