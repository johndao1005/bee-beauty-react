@echo off

@REM Move build files from front end to backend for deploy
cp -a %USERPROFILE%\workspace\bee-beauty\frontend\build\. %USERPROFILE%\workspace\bee-beauty\public
