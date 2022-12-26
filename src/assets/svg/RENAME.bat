@echo off
pushd %~dp0
setlocal EnableDelayedExpansion

set Num=1
for /r %%i in (*.svg) do (
    ren "%%i" "!Num!.svg"
    set /a Num+=1
)
