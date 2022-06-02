if [ $# -eq 0 ]
  then
    echo "No parameters provided. Launching bash"
    echo "...activating conda env..."
    source ./venv/bin/activate
    exec bash
    bash
else
    while test $# -gt 0; do
      case "$1" in
        -h|--help)
          echo "options:"
          echo "-h, --help                show brief help"
          exit 0
          ;;
        -b)
          echo "Launch backend server"
          python3 ./backend/app.py
          ;;
        -s)
          echo "Launch backend server with serving"
          python3 ./backend/app.py serve
          ;;
        -d)
          echo "Build and deploy..."
          cd ./frontend
          npm run deploy
          cd ../
          python3 ./backend/app.py serve
          ;;
        *)
          break
          ;;
      esac
    done
fi
