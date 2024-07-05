SERVER=ubuntu@42.193.192.55
#SERVER=ubuntu@119.91.200.187
REMOTE_PATH=~/www/xiejiapeng.cn
LOCAL_PATH=out/

production:
	npm run build
	ssh -o StrictHostKeyChecking=no -i ~/.ssh/id_rsa -t $(SERVER) "rm -rf $(REMOTE_PATH) && mkdir $(REMOTE_PATH)"
	rsync -vzr $(LOCAL_PATH) $(SERVER):$(REMOTE_PATH)